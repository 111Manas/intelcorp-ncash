import React from "react";

const SmallScreen: React.FC = ({ children }) => {
  return (
    <div className="d-md-none d-lg-none d-xl-none d-xxl-none">{children}</div>
  );
};

export default SmallScreen;
