import React, { Component } from 'react';

class SubmitButton extends Component {
    constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.submitHandle=this.submitHandle.bind(this);
    }

    state = { 
        newtodo: ""
     }
     handleChange(evt) {
         this.setState({newtodo : evt.target.value})
     }

    submitHandle(e) {
        e.preventDefault();
        this.props.createTodo(this.state.newtodo);
    }
    render() { 
        return ( 
        <div>
           <form onSubmit={this.submitHandle} action="">
                <label htmlFor="newtask">Add new Todo</label>
                <input type="text" onChange={this.handleChange} id="newtask" placeholder="form"/>
            </form>
            <button onClick={this.submitHandle}>Submit</button>
        </div> );
    }
}
 
export default SubmitButton;