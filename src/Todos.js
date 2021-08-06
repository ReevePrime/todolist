import React, { Component } from 'react';
import "./Todos.css";

class Todos extends Component {
    constructor(props) {
    super(props);
    this.state = {
        active: false
    }
    this.handleDelete=this.handleDelete.bind(this);
    this.handleClick=this.handleClick.bind(this);
}

    handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    handleDelete() {
        this.props.deleteTodo(this.props.id);
    }

    render() {

        return <li className={this.state.active ? "Todos-items": null}  onClick={this.handleClick}>{this.props.task} <button onClick={this.handleDelete}>Delete</button></li>
    }
}
 
export default Todos;
