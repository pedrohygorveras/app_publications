import React from "react";

type ContainerAuthProps = {
  children: React.ReactNode;
};

export const ContainerAuth: React.FC<ContainerAuthProps> = ({ children }) => {
  return (
    <div className="flex items-center min-h-screen bg-base-200">
      <div className="md:max-w-screen-sm w-full mx-auto md:px-4">
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 rounded-md shadow-md p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
