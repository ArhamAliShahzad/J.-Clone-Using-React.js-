import { useState, useEffect } from 'react';
import { uploadProductImage } from '../services/productService';

const ProductForm = ({ onSubmit, editingProduct, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        stock: 0
        // Removed category field
    });
    const [isUploading, setIsUploading] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (editingProduct) {
            setFormData({
                name: editingProduct.name || '',
                price: editingProduct.price?.toString() || '',
                description: editingProduct.description || '',
                imageUrl: editingProduct.imageUrl || '',
                stock: editingProduct.stock || 0
                // Removed category from editing data
            });
        }
    }, [editingProduct]);

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.price || isNaN(formData.price)) errors.price = 'Valid price is required';
        if (formData.stock < 0) errors.stock = 'Stock cannot be negative';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleNumberChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setIsUploading(true);
            const result = await uploadProductImage(file);
            setFormData(prev => ({ ...prev, imageUrl: result }));
        } catch (error) {
            console.error('Upload error:', error);
            setFormErrors(prev => ({ ...prev, image: 'Failed to upload image' }));
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const submissionData = {
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock) || 0
            // No category in submission
        };

        onSubmit(submissionData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Product Name*
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2 border ${formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' :
                            'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                        }`}
                />
                {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
            </div>

            {/* Price Field */}
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price*
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleNumberChange}
                    min="0"
                    step="0.01"
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2 border ${formErrors.price ? 'border-red-500 focus:border-red-500 focus:ring-red-500' :
                            'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                        }`}
                />
                {formErrors.price && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.price}</p>
                )}
            </div>

            {/* Description Field */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
            </div>

            {/* Stock Field */}
            <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock Quantity
                </label>
                <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleNumberChange}
                    min="0"
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2 border ${formErrors.stock ? 'border-red-500 focus:border-red-500 focus:ring-red-500' :
                            'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                        }`}
                />
                {formErrors.stock && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.stock}</p>
                )}
            </div>

            {/* Image Upload Field */}
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Product Image
                </label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {isUploading && <p className="mt-1 text-sm text-gray-500">Uploading image...</p>}
                {formErrors.image && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.image}</p>
                )}
                {formData.imageUrl && (
                    <div className="mt-2">
                        <img
                            src={formData.imageUrl}
                            alt="Preview"
                            className="h-20 w-20 object-cover rounded border border-gray-200"
                            onError={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                        />
                    </div>
                )}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    disabled={isUploading}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isUploading ? 'Processing...' : (editingProduct ? 'Update Product' : 'Add Product')}
                </button>
            </div>
        </form>
    );
};

export default ProductForm;