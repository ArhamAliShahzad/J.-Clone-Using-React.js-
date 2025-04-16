import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Outlet />
        </main>
        <Footer />
        {/* ToastContainer added here - won't affect layout */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="text-sm"
        />
      </div>
    </CartProvider>
  );
};

export default App;