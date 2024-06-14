import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Test from "./Test.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "test/:name",
    element: <Test />,
  },
]);

export default router;
