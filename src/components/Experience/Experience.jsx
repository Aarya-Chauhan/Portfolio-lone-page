import React from 'react'
import styles from './Experience.module.css';
import skill from "../../data/skills.json";
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
        <h2>Experience</h2>
        <div>
          <div>{
            skill.map((skill, id)=>{
              return <div key={id}>
                <div><img src={getImageUrl(skill.imageSrc)} alt={(skill.title)} /></div>
                <p>{skill.title}</p>
              </div>
            })
            }</div>
          <ul></ul>
        </div>

    </section>
  )
}

export default Experience
