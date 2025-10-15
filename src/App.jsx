import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import Layout from "./components/common/layout/Layout";
import CreateInvestorPage from "./pages/investor/CreateInvestorPage";
import InvestorListPage from "./pages/investor/InvestorListPage";
import CreateProductPage from "./pages/product/CreateProductPage";
import ProductListPage from "./pages/product/ProductListPage";
import SchemeListPage from "./pages/schemes/SchemeListPage";
import CreateSchemesPage from "./pages/schemes/CreateSchemesPage";
import CreateTransactionPage from "./pages/transaction/CreateTransactionPage";
import TransactionList from "./pages/transaction/TransactionListPage";
import ViewInvestorPage from "./pages/investor/ViewInvestorPage"

import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import OtpValidatePage from "./pages/auth/OtpValidatePage";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage";
import SettingsPage from "./pages/SettingsPage"
import NotificationPage from "./pages/NotificationPage"
import ContactPage from "./pages/ContactPage"
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<LoginRouteProtect />}> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
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
            <Route path="/investor-create" element={<CreateInvestorPage />} />
            <Route path="/investor-list" element={<InvestorListPage />} />
            <Route path="/investor-profile" element={<ViewInvestorPage />} />
            

            <Route path="/product-create" element={<CreateProductPage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/scheme-create" element={<CreateSchemesPage />} />
            <Route path="/scheme-list" element={<SchemeListPage />} />
            <Route
              path="/transaction-create"
              element={<CreateTransactionPage />}
            />
            <Route
              path="/about"
              element={<CreateTransactionPage />}
            />
             <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route path="/transaction-list" element={<TransactionList />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notification" element={<NotificationPage />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
