import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import Layout from "./components/common/layout/Layout";
import CreateCustomerPage from "./pages/customer/CreateCustomerPage";
import CustomerListPage from "./pages/customer/CustomerListPage";
import CreateProductPage from "./pages/product/CreateProductPage";
import ProductListPage from "./pages/product/ProductListPage";
import SchemeListPage from "./pages/schemes/SchemeListPage";
import CreateSchemesPage from "./pages/schemes/CreateSchemesPage";
import CreateTransactionPage from "./pages/transaction/CreateTransactionPage";
import TransactionList from "./components/transaction/TransactionList";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import OtpValidatePage from "./pages/auth/OtpValidatePage";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<LoginRouteProtect />}> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-forget" element={<ForgetPasswordPage />} />
            <Route path="/otp-validate" element={<OtpValidatePage />} />
            <Route path="/password-reset" element={<ResetPasswordPage />} />
          {/* </Route> */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Layout />
              // </ProtectedRoute>
            }
          >
            {/* <Route index element={<div>Dashboard Page</div>} /> */}
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/customer-create" element={<CreateCustomerPage />} />
            <Route path="/customer-list" element={<CustomerListPage />} />
            <Route path="/product-create" element={<CreateProductPage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/scheme-create" element={<CreateSchemesPage />} />
            <Route path="/scheme-list" element={<SchemeListPage />} />
            <Route
              path="/transaction-create"
              element={<CreateTransactionPage />}
            />
            <Route path="/transaction-list" element={<TransactionList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
