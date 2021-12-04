import {
  CompanyDetailsPage,
  DigitalContractReviewPage,
  DigitalContractSuccessPage,
  HomePage,
  LoginPage,
  SelectServicesPage,
  SignUpPage,
  UserDetailsPage,
  UserVerificationPage,
} from "./components/pages";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import DashboardAnalysis from "./components/pages/dashboard/analysis/analysis";
import DashboardClaims from "./components/pages/dashboard/claims/claims";
import DashboardDetax from "./components/pages/dashboard/detax/detax";
import DashboardEmployees from "./components/pages/dashboard/employees/employees";
import DashboardHome from "./components/pages/dashboard/home/home";
import DashboardNps from "./components/pages/dashboard/nps/nps";
import DashboardSettings from "./components/pages/dashboard/settings/settings";
import DashboardTransaction from "./components/pages/dashboard/transaction/transaction";
import DigitalContractPage from "./components/pages/digital-contract.page";

/*
	@Dashboard Router
*/

export enum RoutePaths {
  Home = "/",
  Login = "/login",
  SignUp = "/sign-up",
  UserDetails = "/user-details",
  UserVerification = "/user-verification",
  DigitalContractPage = "/digital-contract-page",
  DigitalContractReview = "/digital-contract-review",
  DigitalContractSuccess = "/digital-contract-success",
  CompanyDetails = "/company-details",
  SelectServices = "/select-services",
  DashboardHome = "/dashboard",
  DashboardEmployees = "/dashboard/employees",
  DashboardDetax = "/dashboard/detax",
  DashboardNps = "/dashboard/nps",
  DashboardAnalysis = "/dashboard/analysis",
  DashboardTransaction = "/dashboard/transaction",
  DashboardClaims = "/dashboard/claims",
  DashboardSettings = "/dashboard/settings",
}

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.Home} element={<HomePage />} />
        <Route path={RoutePaths.Login} element={<LoginPage />} />
        <Route path={RoutePaths.SignUp} element={<SignUpPage />} />
        <Route path={RoutePaths.UserDetails} element={<UserDetailsPage />} />
        <Route
          path={RoutePaths.UserVerification}
          element={<UserVerificationPage />}
        />
        <Route
          path={RoutePaths.CompanyDetails}
          element={<CompanyDetailsPage />}
        />
        <Route
          path={RoutePaths.SelectServices}
          element={<SelectServicesPage />}
        />
        <Route
          path={RoutePaths.DigitalContractPage}
          element={<DigitalContractPage />}
        />
        <Route
          path={RoutePaths.DigitalContractReview}
          element={<DigitalContractReviewPage />}
        />
        <Route
          path={RoutePaths.DigitalContractSuccess}
          element={<DigitalContractSuccessPage />}
        />
        <Route path={RoutePaths.DashboardHome} element={<DashboardHome />} />
        <Route
          path={RoutePaths.DashboardEmployees}
          element={<DashboardEmployees />}
        />
        <Route path={RoutePaths.DashboardDetax} element={<DashboardDetax />} />
        <Route path={RoutePaths.DashboardNps} element={<DashboardNps />} />
        <Route
          path={RoutePaths.DashboardAnalysis}
          element={<DashboardAnalysis />}
        />
        <Route
          path={RoutePaths.DashboardTransaction}
          element={<DashboardTransaction />}
        />
        <Route
          path={RoutePaths.DashboardClaims}
          element={<DashboardClaims />}
        />
        <Route
          path={RoutePaths.DashboardSettings}
          element={<DashboardSettings />}
        />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
