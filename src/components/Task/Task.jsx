import React from 'react'
import styles from './Task.module.css'

export default function Task(props) {
  return (
    <div>
      <h2>{props.task.completed? <del>{props.task.des}</del>: props.task.des}</h2>
      <button onClick={props.termineTask}>Termine</button>
      <button onClick={props.encoursTask}>En cours</button>
      <button onClick={props.deleteTask}>Supprimer</button>
    </div>
  )
}
