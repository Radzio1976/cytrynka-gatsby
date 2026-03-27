import React from "react";
import * as styles from "./Home.module.css";
import HomeFirstSection from "./HomeFirstSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeThirdSection from "./HomeThirdSection";
import HomeFourthSection from "./HomeFourthSection";
import HomeFifthSection from "./HomeFifthSection";

const Home = () => {
  return (
    <section className={styles.home}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
      <HomeFifthSection />
    </section>
  );
};

export default Home;
