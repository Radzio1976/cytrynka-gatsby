import React from "react";
import * as styles from "./Offer.module.css";
import child from "../../images/child.jpg";

const OfferContainerUpper = () => {
  return (
    <section className={styles.offerContainerUpper}>
      <article
        className={`${styles.offerContainerFirstText} ${styles.offerContainerBox}`}
      >
        <div className={styles.offerContainerFirstTextWrapper}>
          <h3>Oferujemy :</h3>
          <ul>
            <li>
              - pranie bielizny hotelowej (pościele,ręczniki,szlafroki itp.)
            </li>
            <li>
              - tekstyliów dla restauracji i innych obiektów gastronomicznych
            </li>
            <li>- pranie odzieży roboczej</li>
            <li>- maglowanie</li>
            <li>- składanie i pakowanie</li>
          </ul>
          <h3>Zapraszamy obiekty noclegowe,</h3>
          <h3>gastronomiczne, firmy,</h3>
          <h3>klientów indywidualnych i wszystkich zainteresowanych.</h3>
        </div>
      </article>
      <div
        className={`${styles.offerContainerFirstImage} ${styles.offerContainerBox}`}
      >
        <img src={child} alt="" />
      </div>
    </section>
  );
};

export default OfferContainerUpper;
