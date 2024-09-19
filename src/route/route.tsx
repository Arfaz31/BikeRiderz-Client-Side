import App from "@/App";
import AboutUs from "@/pages/AboutUS/AboutUs";
import BikeLists from "@/pages/BikeLists/BikeLists";
import Blog from "@/pages/Blog/Blog";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import SingleProduct from "@/pages/SingleProductPage/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bike",
        element: <BikeLists />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "singleProduct/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
