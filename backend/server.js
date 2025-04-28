require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
const path = require('path')

connectDB()

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// Static files with proper headers
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res) => {
        res.set('Cross-Origin-Resource-Policy', 'cross-origin')
    }
}))

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('API Running')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`)
})