import React from "react";
import * as styles from "./Contact.module.css";
import phoneIcon from "../../images/phone-icon.png";
import locationIcon from "../../images/location-icon.png";
import emailIcon from "../../images/email-icon.png";

const AddressAndContactFormContainerContentLeft = () => {
  return (
    <section className={styles.addressAndContactFormContainerContentLeft}>
      <div
        className={`${styles.addressAndContactFormContainerContentLeftPhone} ${styles.addressAndContactContainer}`}
      >
        <img src={phoneIcon} alt=""></img>
        <div className={styles.addressAndContactFormContainerContentLeftText}>
          <h6>Zadzwoń do nas</h6>
          <h5>+48 573 355 294</h5>
        </div>
      </div>
      <div
        className={`${styles.addressAndContactFormContainerContentLeftAddress} ${styles.addressAndContactContainer}`}
      >
        <img src={locationIcon} alt=""></img>
        <div className={styles.addressAndContactFormContainerContentLeftText}>
          <h6>Lokalizacja</h6>
          <h5>78-111 Ustronie Morskie</h5>
          <h5>Kołobrzeska 35</h5>
        </div>
      </div>
      <div
        className={`${styles.addressAndContactFormContainerContentLeftEmail} ${styles.addressAndContactContainer}`}
      >
        <img src={emailIcon} alt=""></img>
        <div
          className={styles.addressAndContactFormContainerContentLeftEmailText}
        >
          <h6>Email</h6>
          <h5>biuro@pralniacytrynka.pl</h5>
        </div>
      </div>
    </section>
  );
};

export default AddressAndContactFormContainerContentLeft;
