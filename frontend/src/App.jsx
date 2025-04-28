import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const location = useLocation();
  const hideFooterPages = ["/dashboard"];
  const hideNavbarPages = ["/dashboard"];

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        {/* CONDITIONAL NAVBAR RENDERING */}
        {!hideNavbarPages.includes(location.pathname) && <Header />}

        <main className="flex-grow container mx-auto px-4">
          <Outlet />
        </main>

        {/* CONDITIONAL FOOTER RENDERING */}
        {!hideFooterPages.includes(location.pathname) && <Footer />}

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