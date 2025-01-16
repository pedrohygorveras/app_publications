import React from "react";
import { Loading } from "../Loading";

const LoadingAuth: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export { LoadingAuth };
