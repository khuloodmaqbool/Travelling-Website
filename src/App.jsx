import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";
import Tour from "./pages/Tour";
import SingleTour from "./pages/singleTour";
import Destination from "./pages/destination";
import  Home  from "./pages/home";
import About from "./pages/about";
import { Activities } from "./components/Activities";
import Contact from "./pages/contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/activities",
          element: <Activities/>
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "tour",
          element: <Tour />,
        },
        {
          path: "destination",
          element: <Destination />,
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "/singleTour/:id",
          element: <SingleTour />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
