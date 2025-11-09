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

      {/* Spacer to prevent content from being hidden under navbar */}
      <div className="h-[72px] lg:h-[80px]"></div>

      {/* Main Page Content */}
      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* Footer Section */}
      <div className="bg-base-200 dark:bg-base-200 py-10 mt-10">
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>

      {/* Toast Notifications */}
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
