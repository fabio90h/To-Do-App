import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskPropHolder, taskToggle, taskSpecificToggle } from "../actions";

class TaskForm extends Component {
    onSubmitHandler(event) {
        const { text } = this.props;
        event.preventDefault();
        this.props.addTask(text);
    }

    onTaskChangeHandler(text) {
        this.props.taskPropHolder({props: 'text', value: text.target.value})
    }

    listOfTask = () => {
        return (
            this.props.taskList.map((task) => {
                return (
                    <li key={task.title}>
                        <span 
                            onClick={() => this.props.taskSpecificToggle({task, name: 'completed'})}  
                        >
                             {task.title}  
                        </span>
                        {task.completed 
                            ? 
                                <button>Hi</button> 
                            : 
                            null
                        }  
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
    const { taskList, text, completed, id } = state.task;
    console.log(taskList, text, completed, id);
    return (
        {
            taskList,
            text,
            completed,
            id,
        }
    );
};

export default connect(mapStateToProps, { addTask, taskPropHolder, taskToggle, taskSpecificToggle })(TaskForm);
