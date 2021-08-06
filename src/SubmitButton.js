import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./SubmitButton.css";
import Button from 'react-bootstrap/Button';

class SubmitButton extends Component {
    constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.submitHandle=this.submitHandle.bind(this);
    }

    state = { 
        task: "",
        id: uuidv4()
     }
     handleChange(evt) {
       this.setState({[evt.target.name] : evt.target.value})
     }

    submitHandle(e) {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({task : "", id: uuidv4()})
    }
    render() { 
        return ( 
        <div className="Form-container">
           <form onSubmit={this.submitHandle} action="">
                <label htmlFor="newtask"></label>
                <input type="text" 
                value={this.state.task} 
                name="task" 
                onChange={this.handleChange} 
                required 
                id="newtask" 
                placeholder="Enter new task"/>
            </form>
            <Button variant="primary" className="Submit-btn" size="sm" onClick={this.submitHandle}>Submit</Button>
            
        </div> );
    }
}
 
export default SubmitButton;