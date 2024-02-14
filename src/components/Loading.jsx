import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center bg-bg-primary">
      <TailSpin
        height="50"
        width="50"
        color="#1c1c1c"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loading;
