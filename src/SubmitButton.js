import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        <div>
           <form onSubmit={this.submitHandle} action="">
                <label htmlFor="newtask">Add new Todo</label>
                <input type="text" value={this.state.task} name="task" onChange={this.handleChange} id="newtask" placeholder="form"/>
            </form>
            <button onClick={this.submitHandle}>Submit</button>
        </div> );
    }
}
 
export default SubmitButton;