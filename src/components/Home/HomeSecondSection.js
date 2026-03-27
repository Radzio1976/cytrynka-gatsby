import React from "react";
import * as styles from "./Home.module.css";

const HomeSecondSection = () => {
  return (
    <section className={styles.homeSecondSection}>
      <article className={styles.homeSecondContent}>
        <h5>
          Jesteśmy firmą świadczącą kompleksowe usługi w zakresie prania
          wodnego. Dysponujemy nowoczesnymi urządzeniami i stosujemy środki
          pralnicze przyjazne dla środowiska. Współpracujemy z firmą Sovrana,
          działającą w branży pralniczej od ponad 20-stu lat.
        </h5>
        <h5>
          Podchodzimy do każdego klienta indywidualnie. Nasze zaangażowanie,
          terminowość i duży nacisk na jakość świadczonych usług dają gwarancję
          Państwa satysfakcji oraz udanej i długotrwałej współpracy.
        </h5>
      </article>
    </section>
  );
};

export default HomeSecondSection;
