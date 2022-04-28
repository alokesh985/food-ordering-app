import React from "react";
import styles from "../../styles/header.module.scss";

const Header = (props) => {
  const { headerLinks } = props;
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="./swiggy-logo.jpeg"
          alt="swiggy-logo"
          className={styles.logo}
        />
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
