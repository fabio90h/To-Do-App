import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskSpecificToggle } from "../actions/TaskActions";

class TaskList extends Component {
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

    render () {
        return (
            <ul>
                {this.listOfTask()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const { taskList } = state.taskList;
    return (
        {
            taskList
        }
    );
};


export default connect(mapStateToProps, { addTask, taskSpecificToggle })(TaskList);