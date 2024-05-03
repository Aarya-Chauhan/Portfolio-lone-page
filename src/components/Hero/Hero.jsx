import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>hello! I'm Aarya</h1>
        <p className={styles.description}>Welcome to my page ✨</p>
        <a href="#about" className={styles.contactBtn}>
          Learn More !!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImg.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
