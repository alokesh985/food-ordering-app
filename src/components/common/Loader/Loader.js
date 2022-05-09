import React from "react";
import { Watch } from "react-loader-spinner";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Watch height={200} width={200} color="#f37f28" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
