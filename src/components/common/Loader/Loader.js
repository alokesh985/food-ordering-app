import React from "react";
import { Watch } from "react-loader-spinner";
import styles from "./loader.module.scss";

const renderLargeLoader = (height, width) => {
  return (
    <div className={styles.loader}>
      <Watch height={height} width={width} color="grey" ariaLabel="loading" />
    </div>
  );
};

const renderSmallLoader = (height, width) => {
  return (
    <Watch height={height} width={width} color="grey" ariaLabel="loading" />
  );
};

const Loader = ({ width, height, type }) => {
  return type === "small"
    ? renderSmallLoader(height, width)
    : renderLargeLoader(height, width);
};

export default Loader;
