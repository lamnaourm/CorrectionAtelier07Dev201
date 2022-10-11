import React, { Component } from 'react'
import InputTask from '../InputTask/InputTask';
import styles from './TodoListApp.module.css'

export default class TodoListApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            tasks : [],
            description:''
        }
    }

    addTask = () => {
        this.setState({tasks: [...this.state.tasks,{des:this.state.description, completed:true}] })
    }
  render() {
    return (
      <div>
        <InputTask description={this.state.description} onChangeDesc={(e) => this.setState({description: e.target.value})} onClickAdd={this.addTask}/>
        <ul>
        {this.state.tasks.map((item, index) => 
            <li key={index}>{item.completed? <del>{item.des}</del>: item.des}</li>
        )}
        </ul>
      </div>
    )
  }
}
