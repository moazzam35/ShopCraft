import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/UI/layout";
import Hero from "./components/Hero/hero";
import Products from "./components/products/products";
import Cart from "./components/Cart/cart";
import ShippingInfo from "./components/Details/shippinginfo";
import Returns from "./components/Details/return";
import FAQ from "./components/Details/faq";
import TrackOrder from "./components/Details/Trackoder";
import Support from "./components/Details/support";
import Blog from "./components/Details/blog";
import PrivacyPolicy from "./components/Details/privacy-policy";
import TermsOfService from "./components/Details/termsservices";
import ErrorPage from "./components/OtherComp/errorpage";
import About from "./components/Details/about";
import Contact from "./components/Details/contact";
import ProductDetail from "./components/products/ProductDetail";
import Checkout from "./components/Checkout/checkout";
import OrderConfirmation from "./components/Checkout/OrderConfirmation";
import Wishlist from "./components/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shipping-info",
        element: <ShippingInfo />,
      },
      {
        path: "/returns",
        element: <Returns />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
