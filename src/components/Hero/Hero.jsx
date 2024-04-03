import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Aarya</h1>
            <p className={styles.description}> I'm an aspiring Fullstack developer and Machine Learning enthusiast. Reach out if you like to learn more!</p>
            <a className={styles.contactBtn}href="mailto:aaryachauhan11@gmail.com">Contact me!!</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me " />
        <div className={styles.topBlur}>
        </div>
        <div className={styles.bottomBlur}>
        </div>
        
    </section>
    
  )
}

export default Hero
