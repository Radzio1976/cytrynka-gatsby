import React from "react";
import * as styles from "./Offer.module.css";
import offerBackground from "../../images/offer-background.png";
import OfferContainerUpper from "./OfferContainerUpper";
import OfferContainerLower from "./OfferContainerLower";
import OfferContainerTransport from "./OfferContainerTransport";

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div
        className={styles.offerContainer}
        style={{ backgroundImage: `url(${offerBackground})` }}
      >
        <OfferContainerUpper />
        <OfferContainerLower />
        <OfferContainerTransport />
      </div>
    </section>
  );
};

export default Offer;
