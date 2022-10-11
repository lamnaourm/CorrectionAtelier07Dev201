import React from 'react'
import styles from './InputTask.module.css'

export default function InputTask(props) {
  return (
    <div>
        <input type="text" name="des" id="des" placeholder='Saisir une tache ... ' value={props.description} onChange={props.onChangeDesc} />
        <button onClick={props.onClickAdd}>Ajouter</button>
    </div>
  )
}
