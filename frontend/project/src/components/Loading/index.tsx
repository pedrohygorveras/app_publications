import React from "react";

type LoadingProps = {
  className?: string;
};

const Loading: React.FC<LoadingProps> = ({ className = "" }) => {
  return (
    <span
      className={`loading loading-dots loading-lg text-primary ${className}`}
    ></span>
  );
};

export { Loading };
