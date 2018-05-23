import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted } from "../actions/TaskActions";

class TaskList extends Component {
    
    listOfTask = () => {
        console.log('complete', this.props.completedList);
        if (this.props.completed) {
            return(
                this.props.completedList.map(compTask => {
                    return (
                        <li key={compTask.id}>
                            {compTask.title}
                        </li>
                    );
                })
            );
            
        }else{
            console.log("task", this.props.taskList);
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


export default connect(mapStateToProps, { addTask, taskSpecificToggle, taskSpecificPropHolder, taskCompleted })(TaskList);