import React from "react";
import Navbar from "../Shared Component/Navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Wrapper from "../Shared Component/Wraper/Wraper";
import Footer from "../Shared Component/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 dark:bg-base-200 shadow-sm">
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>

      {/* Spacer to avoid content hidden under fixed navbar */}
      <div className="h-[72px] lg:h-[80px]"></div>

      {/* Page content */}
      <Outlet />

      {/* Footer */}

      <Footer/>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MainLayout;
