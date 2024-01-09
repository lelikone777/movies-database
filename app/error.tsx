"use client";

import React, { useEffect } from "react";

type ErrorProps = {
  error: string;
  reset: () => void;
};

const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={reset}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorComponent;
