import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskPropHolder, taskToggle, taskSpecificToggle } from "../actions";

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
            </div>
        );
    }
}

//Props that is brought in
const mapStateToProps = (state) => {
    const { text, completed, id } = state.taskForm;
    console.log( text, completed, id);
    return (
        {
            text,
            completed,
            id,
        }
    );
};

export default connect(mapStateToProps, { addTask, taskPropHolder, taskToggle, taskSpecificToggle })(TaskForm);
