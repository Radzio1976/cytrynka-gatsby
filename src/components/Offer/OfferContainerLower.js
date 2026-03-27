import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import * as styles from "./Offer.module.css";
import towel from "../../images/towel.jpg";

const OfferContainerLower = () => {
  return (
    <section className={styles.offerContainerLower}>
      <div
        className={`${styles.offerContainerSecondImage} ${styles.offerContainerBox}`}
      >
        <img src={towel} alt="" />
      </div>
      <article
        className={`${styles.offerContainerSecondText} ${styles.offerContainerBox}`}
      >
        <div className={styles.offerContainerSecondTextWrapper}>
          <h3>W celu uzyskania szczegółowych</h3>
          <h3>informacji na temat oferty,</h3>
          <h3>cen oraz współpracy</h3>
          <h3>prosimy o kontakt pod numerem telefonu</h3>
          <h3>
            <span>+48 573 355 294</span>
          </h3>
          <h3>
            mailowo:{" "}
            <span>
              <a href="mailto: biuro@pralniacytrynka.pl">
                biuro@pralniacytrynka.pl
              </a>
            </span>
          </h3>
          <h3>bądź za pomocą</h3>
          <h3>
            <span>
              <Link to="/contact">formularza kontaktowego.</Link>
            </span>
          </h3>
        </div>
      </article>
    </section>
  );
};

export default OfferContainerLower;
