import React from "react";
import "./ContentLayout.css";
function ContentLayout({ children }) {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
}

export default ContentLayout;
