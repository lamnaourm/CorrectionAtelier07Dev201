import React from 'react'
import styles from './InformationTask.module.css'

export default function InformationTask(props) {
  return (
    <div>
      <div>
          Nombre Totale : {props.tasks.length}
      </div>
      <div>
          Nombre Termine : {props.tasks.filter(item => item.completed===true).length}
      </div>
      <div>
          Nombre Encours : {props.tasks.filter(item => item.completed===false).length}
      </div>
    </div>
  )
}
