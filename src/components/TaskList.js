import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted } from "../actions/TaskActions";

class TaskList extends Component {
    listOfTask = () => {
        return (
            this.props.taskList.map((task) => {
                return (
                    <li key={task.id}>
                        {
                            task.edit 
                            ? <input autoFocus
                                onChange={text => this.props.taskSpecificPropHolder({task, name: 'title', props: text.target.value})}
                                value={task.title}/> 
                            : <span onClick={() => this.props.taskSpecificToggle({task, name: 'options', props: task.options})}>
                               {task.title} </span>
                        }  
                        {
                            task.options
                            ? <button 
                                    onClick={ task.edit ? () => {
                                        this.props.taskSpecificToggle({task, name: 'edit', props: task.edit })
                                        this.props.taskSpecificToggle({task, name: 'options', props: task.options })
                                        } : () => {
                                        this.props.taskSpecificToggle({task, name: 'edit', props: task.edit }) }}>
                                    {task.edit ? 'save' : 'edit'}
                              </button> 
                            : null
                        }
                        <input type='checkbox' onChange={() => {this.props.taskCompleted(task)}}/>  
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


export default connect(mapStateToProps, { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted })(TaskList);