import React from "react";
import { useCart } from "../context/CartContext"; // Ensure proper casing
import { Link } from "react-router-dom";

const Cart = () => {
  const { 
    cartItems = [], 
    cartCount = 0, 
    removeFromCart = () => {}, 
    updateQuantity = () => {} 
  } = useCart();

  // Memoized total calculation
  const total = React.useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + (price * quantity);
    }, 0);
  }, [cartItems]);

  // Handle quantity updates with bounds checking
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center py-8">
        <p className="text-lg mb-4">Your cart is empty</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart ({cartCount})</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={`${item.id}-${item.quantity}`} className="flex border-b pb-4">
              <div className="flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                  onError={(e) => {
                    e.target.src = '/placeholder-product.png';
                    e.target.className = 'w-20 h-20 object-cover rounded bg-gray-100';
                  }}
                />
              </div>
              
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900">{item.name || 'Unnamed Product'}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
                
                <p className="text-gray-600 mt-1">${(item.price || 0).toFixed(2)}</p>
                
                <div className="flex items-center mt-3">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded-l hover:bg-gray-100"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded-r hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-lg bg-gray-50 h-fit">
          <h2 className="font-bold text-xl mb-6">Order Summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition mt-6">
            Proceed to Checkout
          </button>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            or <Link to="/products" className="text-blue-600 hover:underline">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;