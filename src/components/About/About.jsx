import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} alt="me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt="cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus dignissimos facilis!</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl('about/serverIcon.png')} alt="server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus dignissimos facilis!</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl('about/uiIcon.png')} alt="UI Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus dignissimos facilis!</p>
                </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About
