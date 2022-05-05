import React, { useCallback } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ headerLinks, headerText }) => {
  const renderHeaderLinks = useCallback(() => {
    return headerLinks.map((element, idx) => {
      return (
        <a className={styles.headerLink} key={idx} href={element.url}>
          {element.name}
        </a>
      );
    });
  }, [headerLinks]);

  const renderSwiggyLogo = useCallback(() => {
    return (
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src="./swiggy-logo.jpeg"
            alt="swiggy-logo"
            className={styles.logo}
          />
        </Link>
        {headerText && (
          <div className={styles.headerTextContainer}>
            <h2 className={styles.headerText}>{headerText}</h2>
          </div>
        )}
      </div>
    );
  }, []);

  return (
    <div className={styles.container}>
      {renderSwiggyLogo()}
      <div className={styles.headerLinksContainer}>{renderHeaderLinks()}</div>
    </div>
  );
};

export default Header;
