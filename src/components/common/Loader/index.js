import React from "react";
import { Watch } from "react-loader-spinner";
import styles from "./loader.module.scss";

const Loader = ({ width, height, type }) => {
  const renderLargeLoader = () => {
    return (
      <div className={styles.loader}>
        <Watch height={height} width={width} color="grey" ariaLabel="loading" />
      </div>
    );
  };

  const renderSmallLoader = () => {
    return (
      <Watch height={height} width={width} color="grey" ariaLabel="loading" />
    );
  };

  return type === "small" ? renderSmallLoader() : renderLargeLoader();
};

export default Loader;
