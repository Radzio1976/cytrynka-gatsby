import React from "react";
import * as styles from "./Home.module.css";
import background from "../../images/background.jpg";

const HomeFirstSection = () => {
  return (
    <section
      className={styles.homeFirstSection}
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className={styles.homeFirstSectionTitle}>
        <h1>Cytrynka</h1>
      </header>
      <article className={styles.homeFirstSectionArticle}>
        <h3>nowoczesna pralnia wodna</h3>
        <h3>dla obiektów noclegowych, gastronomicznych,</h3>
        <h3>firm i klientów indywidualnych.</h3>
      </article>
    </section>
  );
};

export default HomeFirstSection;
