import React from "react";
import styles from "../../styles/common/header.module.scss";

const Header = (props) => {
  const { headerLinks, headerText } = props;
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="./swiggy-logo.jpeg"
          alt="swiggy-logo"
          className={styles.logo}
        />
        {headerText && (
          <div className={styles.headerTextContainer}>
            <h2 className={styles.headerText}>{headerText}</h2>
          </div>
        )}
      </div>
      <div className={styles.headerLinksContainer}>
        {headerLinks.map((element, idx) => {
          return (
            <a className={styles.headerLink} key={idx} href={element.url}>
              {element.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
