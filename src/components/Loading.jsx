import React from "react";
import styles from "./styles/Loading.module.css";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className={styles.container}>
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
