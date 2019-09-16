import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Channel from './Channel';

export default function Layout() {
  return (
    <div className="flex">
   <Channel />  
  <div className='flex-1 flex flex-col min-h-screen h-screen'>
    <Header />
    <Content />
  </div>
</div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
