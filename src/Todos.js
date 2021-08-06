import React, { Component } from 'react';
import "./Todos.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Todos extends Component {
    constructor(props) {
    super(props);
    this.state = {
        active: false,
        edit: false,
        task: ""
    }
    this.handleDelete=this.handleDelete.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleChange=this.handleChange.bind(this);
}

    handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    handleDelete() {
        this.props.deleteTodo(this.props.id);
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleEdit(e) {
        e.stopPropagation();
        this.setState({task: this.props.task})
        this.props.updateTodo(this.props.id, this.state.task)
        const currentState = this.state.edit;
        this.setState({ edit: !currentState})
    }

    
    render() {
        return (
                this.props.stateLength === 1 && this.props.task === "" ? 
                    <div className="emptylist"><br/>Your task list is empty</div> 
                    : this.state.edit === true ? 
                    <form className="space" onSubmit={this.handleEdit} action="" >
                        <input type="text" 
                        name="task" 
                        value={this.state.task} 
                        required
                        onChange={this.handleChange}/> <button>Submit</button>
                        </form>
                        : <li 
                            className={this.state.active ? "Todos-items space": "space"}  
                            onClick={this.handleClick}
                            >{this.props.task} 
            {this.props.task === "" ? null : 
                <div className="libtn">
                    <Button size="sm" variant="outline-secondary" onClick={this.handleEdit}><FontAwesomeIcon icon={faPen} /></Button>
                    <Button size="sm" variant="outline-danger" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </div>}</li>
    )}
}
 
export default Todos;
