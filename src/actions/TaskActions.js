import * as actionTypes from './types';

export const addTask = (text, id) => {
    return (
        {
            type: actionTypes.ADD_TASK,
            text,
            id,
        }
    );
};

export const taskToggle = ({ props, value }) => {
    return (
        {
            type: actionTypes.TASK_TOGGLE,
            payload: {props, value},
        }
    );
};

export const taskPropHolder = ({props, value}) => {
    return (
        {
            type: actionTypes.TASK_PROP_HOLDER,
            payload: {props, value},
        }
    );
};

export const taskSpecificToggle = ({task, name, props}) => {
    return (
        {
            type: actionTypes.TASK_SPECIFIC_TOGGLE,
            payload: {task, name, props}
        }
    );
};

export const taskSpecificPropHolder = ({task, name, props}) => {
    return (
        {
            type: actionTypes.TASK_SPECIFIC_PROP_HOLDER,
            payload: {task, name, props},
        }
    );
};

export const taskCompleted = (task) => {
    return (
        {
            type: actionTypes.TASK_COMPLETED,
            task
        }
    );
};