import React from "react";
import * as styles from "./Home.module.css";
import homepageFifthBackground from "../../images/homepage-fifth-background.jpg";

const HomeFifthSection = () => {
  return (
    <section
      className={styles.homeFifthSection}
      style={{ backgroundImage: `url(${homepageFifthBackground})` }}
    >
      <article className={styles.homeFifthContent}>
        <div className={styles.homeFifthContentLeftAddress}>
          <h5>Ekologiczna Pralnia Wodna „Cytrynka”</h5>
          <h5>ul. Kołobrzeska 35</h5>
          <h5>78-111 Ustronie Morskie</h5>
          <h5>
            <a href="mailto: biuro@pralniacytrynka.pl">
              biuro@pralniacytrynka.pl
            </a>
          </h5>
          <h5>telefon: +48 573 355 294</h5>
        </div>
      </article>
    </section>
  );
};

export default HomeFifthSection;
