import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section>
        <div className="">
            <h1>Hi I'm Aarya</h1>
            <p>I'm an aspiring Fullstack developer and Machine Learning enthusiast. Reach out if you like to learn more!</p>
            <a href="mailto:aaryachauhan11@gmail.com">Contact me!!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me " />
        
    </section>
    
  )
}

export default Hero
