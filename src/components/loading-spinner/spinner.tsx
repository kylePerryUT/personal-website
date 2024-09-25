import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-6 h-6">
      <div className="animate-spin rounded-full w-full h-full border-2 border-primary-blue border-t-transparent" />
    </div>
  );
};

export default Spinner;
