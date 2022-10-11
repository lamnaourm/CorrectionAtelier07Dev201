import React, { Component } from "react";
import InformationTask from "../InformationTask/InformationTask";
import InputTask from "../InputTask/InputTask";
import Task from "../Task/Task";
import styles from "./TodoListApp.module.css";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      description: "",
    };
  }

  addTask = () => {
    let listTasks = [...this.state.tasks];
    if (
      listTasks.filter((item) => item.des === this.state.description).length > 0
    ) {
      alert("Tache existe deja");
      return;
    }

    this.setState({
      tasks: [
        ...this.state.tasks,
        { des: this.state.description, completed: false },
      ],
    });
  };

  terminerTask(e, des) {
    let listTasks = [...this.state.tasks];
    listTasks = listTasks.map((item) => {
      if (item.des === des) return { des: item.des, completed: true };
      else return item;
    });
    console.log(listTasks);
    this.setState({ tasks: listTasks });
  }

  encoursTask(e, des) {
    let listTasks = [...this.state.tasks];
    listTasks = listTasks.map((item) => {
      if (item.des === des) return { des: item.des, completed: false };
      else return item;
    });
    this.setState({ tasks: listTasks });
  }

  deleteTask(e, des) {
    if (window.confirm("Voulez-vous supprimer ce produit ? ")) {
      let listTasks = [...this.state.tasks];
      listTasks = listTasks.filter((item) => item.des !== des);
      this.setState({ tasks: listTasks });
    }
  }
  render() {
    return (
      <div className={styles.todolist}>
        <InputTask
          description={this.state.description}
          onChangeDesc={(e) => this.setState({ description: e.target.value })}
          onClickAdd={this.addTask}
        />
        <InformationTask tasks={this.state.tasks} />
        {this.state.tasks.map((item, index) => (
          <Task
            key={index}
            task={item}
            termineTask={(e) => this.terminerTask(e, item.des)}
            encoursTask={(e) => this.encoursTask(e, item.des)}
            deleteTask={(e) => this.deleteTask(e, item.des)}
          />
        ))}
      </div>
    );
  }
}
