import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    uploadProductImage
} from '../services/productService';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('products');
    const [searchTerm, setSearchTerm] = useState('');
    const [deletingId, setDeletingId] = useState(null);
    const [stats, setStats] = useState({
        totalProducts: 0,
        outOfStock: 0,
        totalValue: 0
    });
    const navigate = useNavigate();

    // Memoized filtered products with safety checks
    const filteredProducts = useMemo(() => {
        try {
            if (!Array.isArray(products)) return [];

            return products.filter(product => {
                if (!product || typeof product !== 'object') return false;

                const searchLower = searchTerm.toLowerCase();
                return (
                    (product.name?.toLowerCase() || '').includes(searchLower) ||
                    (product.description?.toLowerCase() || '').includes(searchLower)
                    // Removed category from search
                );
            });
        } catch (err) {
            console.error('Error filtering products:', err);
            toast.error('Error filtering products');
            return [];
        }
    }, [products, searchTerm]);

    // Calculate statistics with error handling
    const calculateStats = (productsList) => {
        try {
            const safeProducts = Array.isArray(productsList) ? productsList : [];

            const totalProducts = safeProducts.length;
            const outOfStock = safeProducts.filter(p => p?.stock <= 0).length;
            const totalValue = safeProducts.reduce((sum, product) => {
                const price = Number(product?.price) || 0;
                const stock = Number(product?.stock) || 0;
                return sum + (price * stock);
            }, 0);

            setStats({
                totalProducts,
                outOfStock,
                totalValue: parseFloat(totalValue.toFixed(2))
            });
        } catch (err) {
            console.error('Error calculating stats:', err);
            setStats({
                totalProducts: 0,
                outOfStock: 0,
                totalValue: 0
            });
        }
    };

    // Load products with comprehensive error handling
    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const data = await getProducts();

            if (!Array.isArray(data)) {
                throw new Error('Invalid products data received');
            }

            setProducts(data);
            calculateStats(data);
            setError(null);
        } catch (err) {
            console.error('Failed to load products:', err);
            setError(err.message);
            setProducts([]);
            calculateStats([]);
            toast.error(`Failed to load products: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial data load
    useEffect(() => {
        fetchProducts();
    }, []);

    // Product edit handler
    const handleEdit = (product) => {
        try {
            if (!product || !product._id) {
                throw new Error('Invalid product selected for editing');
            }

            setEditingProduct({
                ...product,
                price: product.price?.toString() || ''
            });
            toast.info('Ready to edit product');
        } catch (err) {
            console.error('Edit error:', err);
            toast.error('Failed to start editing product');
        }
    };

    const handleCancelEdit = () => {
        setEditingProduct(null);
        toast.info('Edit cancelled');
    };

    // Product deletion handler
    const handleDelete = async (productId) => {
        try {
            if (!productId) {
                throw new Error('No product ID provided');
            }

            const confirmDelete = window.confirm(
                'Are you sure you want to delete this product?'
            );

            if (!confirmDelete) return;

            setDeletingId(productId);
            await deleteProduct(productId);

            const updatedProducts = products.filter(p => p?._id !== productId);
            setProducts(updatedProducts);
            calculateStats(updatedProducts);
            toast.success('Product deleted successfully');
        } catch (err) {
            console.error('Delete error:', err);
            toast.error(`Delete failed: ${err.message}`);
        } finally {
            setDeletingId(null);
        }
    };

    // Form submission handler
    const handleSubmit = async (formData) => {
        try {
            // Validate required fields
            if (!formData?.name?.trim()) {
                throw new Error('Product name is required');
            }
            if (!formData.price || isNaN(formData.price)) {
                throw new Error('Valid price is required');
            }

            // Prepare product data (removed category)
            const productData = {
                name: formData.name.trim(),
                price: parseFloat(formData.price),
                description: formData.description?.trim() || '',
                imageUrl: formData.imageUrl || '',
                stock: parseInt(formData.stock) || 0
            };

            // Determine if we're updating or adding
            if (editingProduct) {
                await updateProduct(editingProduct._id, productData);
                toast.success('Product updated successfully');
            } else {
                await addProduct(productData);
                toast.success('Product added successfully');
            }

            // Refresh the product list
            await fetchProducts();
            setEditingProduct(null);
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(error.message || 'Failed to save product');
        }
    };

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.info('Logged out successfully');
        navigate('/signin');
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex space-x-4">
                            <div className="text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
                                Products: {stats.totalProducts}
                            </div>
                            <div className="text-sm bg-red-50 text-red-800 px-3 py-1 rounded-full">
                                Out of Stock: {stats.outOfStock}
                            </div>
                            <div className="text-sm bg-green-50 text-green-800 px-3 py-1 rounded-full">
                                Inventory Value: ${stats.totalValue}
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center"
                            aria-label="Logout"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards - Mobile View */}
                <div className="md:hidden grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-blue-800">Products</p>
                        <p className="font-bold text-blue-900">{stats.totalProducts}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-red-800">Out of Stock</p>
                        <p className="font-bold text-red-900">{stats.outOfStock}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-green-800">Inventory Value</p>
                        <p className="font-bold text-green-900">${stats.totalValue}</p>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Products Dashboard</h2>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setActiveTab('products')}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'products'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    aria-label="View products"
                                >
                                    Products
                                </button>
                                <button
                                    onClick={() => setActiveTab('analytics')}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'analytics'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                    aria-label="View analytics"
                                >
                                    Analytics
                                </button>
                            </div>
                        </div>

                        {/* Error Display */}
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Product Form Column */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        {editingProduct ? 'Edit Product' : 'Add New Product'}
                                    </h3>
                                    <ProductForm
                                        onSubmit={handleSubmit}
                                        editingProduct={editingProduct}
                                        onCancel={handleCancelEdit}
                                    />
                                </div>
                            </div>

                            {/* Product List Column */}
                            <div className="lg:col-span-2">
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Products List</h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                                            </p>
                                        </div>
                                        <div className="w-full sm:w-auto">
                                            <input
                                                type="text"
                                                placeholder="Search products..."
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                aria-label="Search products"
                                            />
                                        </div>
                                    </div>
                                    <ProductList
                                        products={filteredProducts}
                                        onDelete={handleDelete}
                                        onEdit={handleEdit}
                                        deletingId={deletingId}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;