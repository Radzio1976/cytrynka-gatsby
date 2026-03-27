import React from "react";
import * as styles from "./Contact.module.css";
import GoogleMapContainer from "./GoogleMapContainer";
import AddressAndContactFormContainerTitle from "./AddressAndContactFormContainerTitle";
import AddressAndContactFormContainerContentLeft from "./AddressAndContactFormContainerContentLeft";
import AddressAndContactFormContainerContentRight from "./AddressAndContactFormContainerContentRight";
import washingMachineDrum from "../../images/washing-machine-drum.jpg";

const Contact = () => {
  return (
    <section
      className={styles.contact}
      style={{ backgroundImage: `url(${washingMachineDrum})` }}
    >
      <div className={styles.contactContainer}>
        <GoogleMapContainer />
        <div className={styles.addressAndContactFormContainer}>
          <AddressAndContactFormContainerTitle />
          <div className={styles.addressAndContactFormContainerContent}>
            <AddressAndContactFormContainerContentLeft />
            <AddressAndContactFormContainerContentRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
