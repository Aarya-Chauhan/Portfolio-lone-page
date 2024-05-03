import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me . . .</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I'm an aspiring FullStack developer passionate about creating
                digital experiences through code. Currently I am based in
                Kanpur, India.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I also have keen interest in machine learning and cyber
                security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                When I'm not WORKING I enjoy being in nature, reading books, and
                learning about different languages and cultures round the globe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
