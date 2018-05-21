import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskHolder, taskToggle } from "../actions";

class TaskForm extends Component {
    onSubmitHandler(event) {
        const { text } = this.props;
        event.preventDefault();
        console.log(text)
        this.props.addTask(text);
    }

    onLiClick(task) {
        console.log('onClick',task)
        this.props.taskToggle({props: 'completed', value: task.completed})
    }

    onTaskChangeHandler(text) {
        this.props.taskHolder(text.target.value)
    }

    listOfTask = () => {
        return (
            this.props.taskList.map((task) => {
                return (
                    <li 
                        onClick={this.onLiClick(task)}
                        key={task.title}
                    >
                        {task.title}    
                    </li>
                );
            })
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <input type="text" value={this.props.text} onChange={this.onTaskChangeHandler.bind(this)} />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.listOfTask()}
                </ul>
            </div>
        );
    }
}

//Props that is brought in
const mapStateToProps = (state) => {
    const { taskList, text, completed } = state.task;
    console.log(taskList, text, completed);
    return (
        {
            taskList,
            text,
            completed,
        }
    );
};

export default connect(mapStateToProps, { addTask, taskHolder, taskToggle })(TaskForm);
