import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Men from "./product-categories/Men";
import Women from "./product-categories/Women";
import Fragrances from "./product-categories/Fragrances";
import SignIn from "./Pages/SignIn";
import Singnup from "./Pages/Signup";
import TrackingInfo from "./Pages/TrackingInfo";
import CorporateInquiry from "./Pages/CorporateInquiry";
import Featured from "./Pages/Featured";
import Syncc from "./Pages/Syncc";
import CastCrew from "./Pages/CastCrew";
import PrivacyPolicy from "./customer-service/PrivacyPolicy";
import TermsConditions from "./customer-service/TermsConditions";
import Cart from "./Pages/Cart";
import PaymentGuide from "./customer-service/PaymentGuide";
import Careers from "./company/Careers";
import StoreAddresses from "./company/StoreAddresses";
import BoysGirls from "./product-categories/BoysGirls";
import Makeup from "./product-categories/Makeup";
import SkinCare from "./product-categories/SkinCare";
import Dashboard from "./Pages/Dashboard";
import New from "./Pages/New";
import DeliveryOrders from "./customer-service/DeliveryOrders";
import ReturnsExchanges from "./customer-service/ReturnsExchanges";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "contact-us", element: <Contact /> },
      { path: "men", element: <Men /> },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      },
      { path: "women", element: <Women /> },
      { path: "cart", element: <Cart /> },
      { path: "new", element: <New /> },
      { path: "delivery-orders", element: <DeliveryOrders /> },
      { path: "returns-exchanges", element: <ReturnsExchanges /> },
      { path: "makeup", element: <Makeup /> },
      { path: "skincare", element: <SkinCare /> },
      { path: "fragrances", element: <Fragrances /> },
      { path: "boys-girls", element: <BoysGirls /> },
      { path: "signin", element: <SignIn /> },
      { path: "account", element: <Singnup /> },
      { path: "tracking-info", element: <TrackingInfo /> },
      { path: "corporate", element: <CorporateInquiry /> },
      { path: "syncc", element: <Syncc /> },
      { path: "cast-crew", element: <CastCrew /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-conditions", element: <TermsConditions /> },
      { path: "payment-guide", element: <PaymentGuide /> },
      { path: "careers", element: <Careers /> },
      { path: "store-addresses", element: <StoreAddresses /> },
      { path: "featured", element: <Featured /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);