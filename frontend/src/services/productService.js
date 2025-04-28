const API_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/products`;

// Helper function to handle API responses
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    return response.json();
};

// Get all products with proper error handling
export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await handleResponse(response);

        // Handle different API response formats
        if (Array.isArray(data)) {
            return data; // Direct array response
        } else if (data?.data && Array.isArray(data.data)) {
            return data.data; // { data: [...] } format
        } else if (data?.products && Array.isArray(data.products)) {
            return data.products; // { products: [...] } format
        }
        throw new Error('Invalid products data format');
    } catch (err) {
        console.error('Failed to fetch products:', err);
        throw err;
    }
};

// Add new product
export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify(product)
        });
        return await handleResponse(response);
    } catch (err) {
        console.error('Failed to add product:', err);
        throw err;
    }
};

// Update product
export const updateProduct = async (id, product) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify(product)
        });
        return await handleResponse(response);
    } catch (err) {
        console.error(`Failed to update product ${id}:`, err);
        throw err;
    }
};

// Delete product
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            }
        });
        return await handleResponse(response);
    } catch (err) {
        console.error(`Failed to delete product ${id}:`, err);
        throw err;
    }
};

// Upload product image
export const uploadProductImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: formData
        });

        const result = await handleResponse(response);
        return result.imageUrl || result.url || result; // Handle different response formats
    } catch (err) {
        console.error('Failed to upload image:', err);
        throw err;
    }
};