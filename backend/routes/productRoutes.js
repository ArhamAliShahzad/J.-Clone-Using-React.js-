const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const Product = require('../models/Product')

// Enhanced multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Only image files are allowed (jpeg, png, gif)'), false)
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
        files: 1
    },
    fileFilter
})

// Upload image with improved error handling
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded or invalid file type'
            })
        }

        const protocol = req.protocol
        const host = req.get('host')
        const imageUrl = `/uploads/${req.file.filename}`

        res.json({
            success: true,
            imageUrl,
            fullUrl: `${protocol}://${host}${imageUrl}`
        })
    } catch (err) {
        console.error('Image upload error:', err)
        res.status(500).json({
            success: false,
            message: 'Failed to upload image',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

// Get all products with pagination
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, category } = req.query
        const query = category ? { category } : {}

        const products = await Product.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()

        const count = await Product.countDocuments(query)

        res.json({
            success: true,
            data: products,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })
    } catch (err) {
        console.error('Failed to fetch products:', err)
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

// Get single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }
        res.json({ success: true, data: product })
    } catch (err) {
        console.error(`Failed to fetch product ${req.params.id}:`, err)
        res.status(500).json({
            success: false,
            message: 'Failed to fetch product',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

// Add new product with validation
router.post('/', async (req, res) => {
    try {
        const { name, price, description, imageUrl, stock, category } = req.body

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Product name and price are required'
            })
        }

        const product = new Product({
            name,
            price: parseFloat(price),
            description: description || '',
            imageUrl: imageUrl || '',
            stock: parseInt(stock) || 0,
            category: category || 'general'
        })

        const newProduct = await product.save()
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch (err) {
        console.error('Failed to create product:', err)
        res.status(400).json({
            success: false,
            message: 'Failed to create product',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

// Update product with full validation
router.put('/:id', async (req, res) => {
    try {
        const { name, price, description, imageUrl, stock, category } = req.body

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Product name and price are required'
            })
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                price: parseFloat(price),
                description,
                imageUrl,
                stock: parseInt(stock) || 0,
                category: category || 'general'
            },
            { new: true, runValidators: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }

        res.json({
            success: true,
            data: updatedProduct
        })
    } catch (err) {
        console.error(`Failed to update product ${req.params.id}:`, err)
        res.status(400).json({
            success: false,
            message: 'Failed to update product',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

// Delete product
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }

        res.json({
            success: true,
            message: 'Product deleted successfully',
            data: deletedProduct
        })
    } catch (err) {
        console.error(`Failed to delete product ${req.params.id}:`, err)
        res.status(500).json({
            success: false,
            message: 'Failed to delete product',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        })
    }
})

module.exports = router