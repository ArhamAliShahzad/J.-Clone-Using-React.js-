import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, onDelete, onEdit, deletingId }) => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (productId) => {
        setImageErrors(prev => ({ ...prev, [productId]: true }));
    };

    return (
        <div className="divide-y">
            {products.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                    No products found
                </div>
            ) : (
                products.map((product) => (
                    <div key={product._id} className="p-6 flex items-start gap-4 hover:bg-gray-50">
                        {/* Product image */}
                        <div className="flex-shrink-0 w-20 h-20">
                            {product.imageUrl && !imageErrors[product._id] ? (
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-md"
                                    onError={() => handleImageError(product._id)}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                                    <span className="text-gray-500 text-xs">No Image</span>
                                </div>
                            )}
                        </div>

                        {/* Product details */}
                        <div className="flex-1">
                            <h3 className="font-medium text-lg">{product.name}</h3>
                            {product.description && (
                                <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
                            )}
                            <p className="text-blue-600 font-semibold mt-2">${product.price?.toFixed(2)}</p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-2">
                            <button
                                onClick={() => onEdit(product)}
                                className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-50"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(product._id)}
                                disabled={deletingId === product._id}
                                className={`text-red-600 hover:text-red-800 px-3 py-1 rounded hover:bg-red-50 ${deletingId === product._id ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {deletingId === product._id ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    deletingId: PropTypes.string
};

export default ProductList;