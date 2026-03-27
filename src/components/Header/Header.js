import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import * as styles from "./Header.module.css";
import logoImage from "../../images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainTitleContainer}>
        <Link to="/">
          <div
            className={styles.logo}
            style={{ backgroundImage: `url(${logoImage})` }}
          ></div>
        </Link>
        <h1>Ekologiczna Pralnia Wodna „Cytrynka”</h1>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">O nas</Link>
          </li>
          <li>
            <Link to="/offer">Oferta</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
