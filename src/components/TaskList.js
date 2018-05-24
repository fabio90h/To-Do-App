import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted, completedRemove } from "../actions/TaskActions";

class TaskList extends Component { 

    createDate = () => {
        const today = new Date();
        return `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
    }

    listOfTask = () => {
        if (this.props.completed) {
            return(
                this.props.completedList.map(compTask => {
                    console.log(compTask)
                    return (
                        <li key={compTask.id}>
                            <div>{compTask.title}</div>
                            <div>{compTask.dateCompleted}</div>
                            <button onClick={() => {this.props.completedRemove(compTask)}}>Remove</button>
                        </li>
                    );
                })
            );
            
        }else{
            return (
                this.props.taskList.map((task) => {
                    console.log('taskList', task)
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
                            <input type='checkbox' onChange={() => {
                                this.props.taskSpecificPropHolder({task, name: 'dateCompleted', props: this.createDate()})
                                this.props.taskCompleted(task)}
                            }
                            />  
                        </li>          
                    );
                })
            );   
        }
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
    const { taskList, completedList, completed } = state.taskList;
    return (
        {
            taskList,
            completedList,
            completed
        }
    );
};


export default connect(mapStateToProps, { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted, completedRemove })(TaskList);