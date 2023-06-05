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
import { Provider } from "react-redux";
import store from "./redux/store";
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
  ThirdCheckupPage,
  ProfilePage,
  DashboardPage,
  DoctorDetailsPage,
  DashNewsPage,
  DashConditionsPage,
  DashDoctorsPage,
  DashServicesPage,
} from "./pages";
import { ThemeProvider } from "react-bootstrap";
import FourthCheckupPage from "./pages/FourthCheckupPgae";

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
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/services" element={<DashServicesPage />} />
      <Route path="/dashboard/doctors" element={<DashDoctorsPage />} />
      <Route path="/dashboard/conditions" element={<DashConditionsPage />} />
      <Route path="/dashboard/news" element={<DashNewsPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/verifycode" element={<ResetPasswordNotification />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/checkup" element={<FirstCheckupPgae />} />
      <Route path="/checkup2" element={<SecondCheckupPgae />} />
      <Route path="/checkup3" element={<ThirdCheckupPage />} />
      <Route path="/checkup4" element={<FourthCheckupPage />} />
    </Route>
  )
);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider dir="ltr">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* <ToastContainer rtl /> */}
    </ThemeProvider>
  </React.StrictMode>
);
