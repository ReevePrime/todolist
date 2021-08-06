import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubmitButton from './SubmitButton';
import Todos from "./Todos";
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.createTodo=this.createTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
    }
    state = {
        todos: [{task: "my placeholder task"}] 
      }

        createTodo(newTodo) {
            this.setState({
            todos: [...this.state.todos, newTodo]
            });
            console.log(this.state.todos)
        }

        deleteTodo(id) {
            console.log(id)
            this.setState({
                todos: this.state.todos.filter(tasks => tasks.id !== id )})
        }


        render() { 
        const tasks = this.state.todos.map(todo => {
            return <Todos deleteTodo={this.deleteTodo} task={todo.task} id={todo.id}/>})


        return (
        <div className="container">
            <div className="List-container">
                <h1>Todo List</h1>
                <SubmitButton createTodo={this.createTodo}/>
                    <ul>{tasks}</ul>
            </div>

        </div>
        )
    }
}
 
export default List;