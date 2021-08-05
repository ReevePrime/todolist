import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return <li>{this.props.task}</li>
    }
}
 
export default Todos;
