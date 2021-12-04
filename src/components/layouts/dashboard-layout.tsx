import DashboardSubHeader from "../dashboard-sub-header/sub-header";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import "./dashboard-layout.scss";
import React from "react";
import BrandLogo from "../brand-logo/brand-logo";

const NcashLogo = "/images/icons/Brand-logo-white.svg";
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-xl-1 col-xxl-1 primary-gradient">
            <BrandLogo
              src={process.env.PUBLIC_URL + NcashLogo}
              width="55"
              height="82"
              classname=" my-4"
              name="Ncash Logo"
            />
            <div className="mt-0">
              <SidebarMenu />
            </div>
          </div>
          <div className="col-lg col-xl col-xxl dashboard-body-bg">
            <div className="mx-4">
              <div className="mb-5">
                <DashboardSubHeader />
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
