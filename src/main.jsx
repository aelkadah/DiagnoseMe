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
  FourthCheckupPage,
  ProfilePage,
  DashboardPage,
  DoctorDetailsPage,
  DashNewsPage,
  DashConditionsPage,
  DashDoctorsPage,
  DashServicesPage,
  DashNewsAddPage,
  DashConditionsAddPage,
  ConditionsPage,
  ConditionDetailsPage,
  ArticlePage,
  DoctorLoginPage,
  DoctorRegisterPage,
} from "./pages";
import { ThemeProvider } from "react-bootstrap";
import { Slide, ToastContainer } from "react-toastify";

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
      <Route path="/doctor-login" element={<DoctorLoginPage />} />
      <Route path="/doctor-signup" element={<DoctorRegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/services" element={<DashServicesPage />} />
      <Route path="/dashboard/doctors" element={<DashDoctorsPage />} />
      <Route path="/dashboard/conditions" element={<DashConditionsPage />} />
      <Route
        path="/dashboard/conditions/add"
        element={<DashConditionsAddPage />}
      />
      <Route path="/dashboard/news" element={<DashNewsPage />} />
      <Route path="/dashboard/news/add" element={<DashNewsAddPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/verifycode" element={<ResetPasswordNotification />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<ArticlePage />} />
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/conditions/:id" element={<ConditionDetailsPage />} />
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
      <ToastContainer
        transition={Slide}
        autoClose={2000}
        closeOnClick
        newestOnTop
      />
    </ThemeProvider>
  </React.StrictMode>
);
