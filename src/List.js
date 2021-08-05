import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import SubmitButton from './SubmitButton';
import Todos from "./Todos";

class List extends Component {
    constructor(props) {
        super(props);
        this.createTodo=this.createTodo.bind(this);
    }
    state = {
        tasks: ["task placeholder"] 
      }
      
        createTodo(newTodo) {
            this.setState({
                tasks: [...this.state.tasks, newTodo]
            });
        }

    render() { 
        const tasks = this.state.tasks.map(task => {
            return <Todos task={task}/>})

        return (
        <div>
            <h1>Title</h1>
            <ul>
                {tasks}
            </ul>
            <SubmitButton createTodo={this.createTodo}/>
        </div>
        )
    }
}
 
export default List;