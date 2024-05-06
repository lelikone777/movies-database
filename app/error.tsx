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
      <h1>Что то пошло не так. Попробуйте ещё раз</h1>
      <button className="hover:text-amber-600" onClick={reset}>
        Попробуйте ещё раз
      </button>
    </div>
  );
};

export default ErrorComponent;
