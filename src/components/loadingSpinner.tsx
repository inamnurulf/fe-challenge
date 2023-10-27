import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-tertiary border-r-4 border-b-4 border-gray-300"></div>
    </div>
  );
};

export default LoadingSpinner;
