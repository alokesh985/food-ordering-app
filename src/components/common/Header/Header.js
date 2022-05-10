import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const renderHeaderLink = (headerLink, idx) => {
  return (
    <a className={styles.headerLink} key={idx} href={headerLink.url}>
      {headerLink.name}
    </a>
  );
};

const renderHeaderLinks = (headerLinks) => {
  return headerLinks.map(renderHeaderLink);
};

const renderSwiggyLogo = (headerText) => {
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
};

const Header = ({ headerLinks, headerText }) => {
  return (
    <div className={styles.container}>
      {renderSwiggyLogo(headerText)}
      <div className={styles.headerLinksContainer}>
        {renderHeaderLinks(headerLinks)}
      </div>
    </div>
  );
};

export default Header;
