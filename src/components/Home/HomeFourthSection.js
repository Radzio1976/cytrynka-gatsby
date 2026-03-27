import React from "react";
import * as styles from "./Home.module.css";
import restaurant from "../../images/restaurant.jpg";
import hotelRoom2 from "../../images/hotel-room-2.jpg";

const HomeFourthSection = () => {
  return (
    <section className={styles.homeFourthSection}>
      <div className={styles.homeFourthContent}>
        <div className={styles.homeFourthContentLeftImage}>
          <img className={styles.heartbeat} src={restaurant} alt="" />
        </div>
        <div className={styles.homeFourthContentRightImage}>
          <img className={styles.heartbeat} src={hotelRoom2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeFourthSection;
