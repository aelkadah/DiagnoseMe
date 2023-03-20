import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./scss/index.scss";

import { Header, Footer } from "./components";
import { ErrorPage, HomePage } from "./pages";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider dir="rtl"> */}
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
    {/* <ToastContainer rtl /> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
