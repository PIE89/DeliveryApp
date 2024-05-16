import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./provider/ThemeProvider";
import { Theme } from "./const/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
      {
        path: "/pizzas",
        element: <p>PIZZAS</p>,
      },
      {
        path: "/sushi",
        element: <p>SUSHI</p>,
      },
      {
        path: "/drinks",
        element: <p>DRINKS </p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
