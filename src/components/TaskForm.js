import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskPropHolder, taskToggle } from "../actions";

class TaskForm extends Component {

    onSubmitHandler(event) {
        const { text, id } = this.props;
        event.preventDefault();
        this.props.addTask(text, id);
    } 

    onTaskChangeHandler(text) {
        this.props.taskPropHolder({props: 'text', value: text.target.value})
    }

    render() {
        return (
            <div className='taskForm'>
                <form className='textInputForm' onSubmit={this.onSubmitHandler.bind(this)}>
                    <input className='taskText' type="text" value={this.props.text} onChange={this.onTaskChangeHandler.bind(this)} />
                    <button className='addTask' type="submit">+</button>
                </form>
                <div>
                    {this.props.completed 
                    ? [<span key='1'onClick={() => {this.props.taskToggle({props: 'completed', value: this.props.completed})}}><u>To Do List</u></span>,
                    <span className='listOption' key='2'><strong>Completed List</strong></span>]
                    : [<span key='1'><strong>To Do List</strong></span>,
                    <span className='listOption' key='2' onClick={() => {this.props.taskToggle({props: 'completed', value: this.props.completed})}}><u>Completed List</u></span>]
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { text, completed, id } = state.taskForm;
    return (
        {
            text,
            completed,
            id,
        }
    );
};

export default connect(mapStateToProps, { addTask, taskPropHolder, taskToggle })(TaskForm);
