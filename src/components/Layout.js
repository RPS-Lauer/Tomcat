import React from "react";
import Navigation from "./navigation/Navigation";
import styled from "styled-components";
import Footer from "./Footer";

const PageLayout = styled.body`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
`;

const Layout = ({ children }) => {
  return (
    <>
      <PageLayout>
        <Navigation />
        {children}
        <Footer />
      </PageLayout>
    </>
  );
};

export default Layout;
