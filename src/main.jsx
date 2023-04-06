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
import {
  ErrorPage,
  HomePage,
  SignupPage,
  LoginPage,
  ResetPasswordPage,
  ResetPasswordNotification,
  ServicesPage,
  ContactPage,
  DoctorsPage,
  ForgetPasswordPage,
  NewsPage,
  FirstCheckupPgae,
  SecondCheckupPgae,
} from "./pages";
import { ThemeProvider } from "react-bootstrap";

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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route
        path="/resetpasswordnotification"
        element={<ResetPasswordNotification />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/FirstCheckupPgae" element={<FirstCheckupPgae />} />
      <Route path="/SecondCheckupPgae" element={<SecondCheckupPgae />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider dir="ltr">
      {/* <Provider store={store}> */}
      <RouterProvider router={router} />
      {/* </Provider> */}
      {/* <ToastContainer rtl /> */}
    </ThemeProvider>
  </React.StrictMode>
);
