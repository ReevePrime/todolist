import React, { Component } from 'react';

class Todos extends Component {
    constructor(props) {
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
}

    handleDelete() {
        this.props.deleteTodo(this.props.id);
    }

    render() {

        return <li>{this.props.task} <button onClick={this.handleDelete}>Delete</button></li>
    }
}
 
export default Todos;
