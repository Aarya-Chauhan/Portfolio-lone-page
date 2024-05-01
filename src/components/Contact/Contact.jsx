import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://github.com/Aarya-Chauhan" target="blank">
            <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/aarya_c111" target="blank">
            <img src={getImageUrl("contact/instagram.png")} alt="Email icon"/>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/aarya-chauhan" target="blank">
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          </a>
        </li>
        
      </ul>
    </footer>
  );
};

