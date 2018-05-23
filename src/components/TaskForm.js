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
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <input type="text" value={this.props.text} onChange={this.onTaskChangeHandler.bind(this)} />
                    <button type="submit">Add</button>
                </form>
                {this.props.completed 
                ? [<span key='1'onClick={() => {this.props.taskToggle({props: 'completed', value: this.props.completed})}}><u>To Do List</u></span>,
                <span key='2'><strong>Completed List</strong></span>]
                : [<span key='1'><strong>To Do List</strong></span>,
                <span key='2' onClick={() => {this.props.taskToggle({props: 'completed', value: this.props.completed})}}><u>Completed List</u></span>]
                }
            </div>
        );
    }
}

//Props that is brought in
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
