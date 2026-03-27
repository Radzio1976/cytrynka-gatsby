import React from "react";
import * as styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <article className={styles.footerContent}>
          <p>
            2019 NOWOCZESNA PRALNIA WODNA Cytrynka | Wszelkie prawa zastrzeżone
            Projekt:{" "}
            <a href="mailto: r.tomaszewski@gmail.com">
              Radosław Tomaszewski tel. 509-998-279
            </a>
          </p>
        </article>
      </footer>
    );
  }
}

export default Footer;
