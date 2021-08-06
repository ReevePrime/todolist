import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import Todos from "./Todos";
import "./List.css";


class List extends Component {
    constructor(props) {
        super(props);
        this.createTodo=this.createTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
    }
    state = {
        todos: [{task: ""}] 
      }

        createTodo(newTodo) {
            this.setState({
            todos: [...this.state.todos, newTodo]
            });
        }

        deleteTodo(id) {
            this.setState({
                todos: this.state.todos.filter(tasks => tasks.id !== id )})
        }

        updateTodo(id, updatedTask) {
            const updatedTodo = this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, task: updatedTask}
                }
                return todo;
            })
            this.setState({todos: updatedTodo})
        }


        render() { 

            
            // Render all the tasks in the state in separate <li> elements
        const tasks = this.state.todos.map(todo => {
            return <Todos   deleteTodo={this.deleteTodo} 
                            task={todo.task} 
                            id={todo.id} 
                            stateLength={this.state.todos.length} 
                            updateTodo={this.updateTodo}
                            key={todo.id}/>})

        return (
        <div className="container">
                <h1>Todo List</h1>
                <SubmitButton createTodo={this.createTodo}/>
                <ul>{tasks}</ul>

        </div>
        )
    }
}
 
export default List;