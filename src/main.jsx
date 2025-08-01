import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Applayout from "./App.jsx";
import Body from "./components/body.jsx";
import Browse from "./components/browse.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Import Redux Provider
import appStore from "./utils/Appstore"; // ✅ Import the configured store

// Create Router
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Render the App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
