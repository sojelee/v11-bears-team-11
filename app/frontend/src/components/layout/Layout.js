import React from "react";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="main-layout">
      <Header className="main-header" />
      <div className="main-component">{children}</div>
      <Footer className="main-footer" />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
