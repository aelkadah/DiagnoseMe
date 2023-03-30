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
  Contact,
  DoctorsPage,
  ErrorPage,
  ForgetPasswordPage,
  HomePage,
  LoginPage,
  Resetpassword,
  ResetPasswordNotification,
  ServicesPage,
  SignupPage,
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
      <Route path="/resetpass" element={<Resetpassword />} />
      <Route
        path="/ResetPasswordNotification"
        element={<ResetPasswordNotification />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/Doctors" element={<DoctorsPage />} />
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
