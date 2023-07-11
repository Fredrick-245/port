import React from 'react'
import classes from './SkillDescription.module.css'
export default function SkillDescription({skill,title}) {
  return (
    <div className={classes.descriptionContainer}>
        <h2>{title}</h2>
        <p>{skill}</p>
    </div>
  )
}
