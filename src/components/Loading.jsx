import React from "react";
import styles from "./styles/Loading.module.css";
import {InfinitySpin} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className={styles.container}>
      <InfinitySpin width="200" color="rgb(106, 106, 255)" />
    </div>
  );
};

export default Loading;
