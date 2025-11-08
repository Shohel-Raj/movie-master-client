import React from "react";

/**
 * A reusable container component that centers content and applies consistent padding.
 * You can pass additional Tailwind classes via the `className` prop.
 */
const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`w-11/12 md:w-10/12 mx-auto sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
