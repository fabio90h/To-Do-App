import * as actionTypes from './types';

export const addTask = (task) => {
    return (
        {
            type: actionTypes.ADD_TASK,
            task,
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

export const taskSpecificToggle = ({task, name}) => {
    return (
        {
            type: actionTypes.TASK_SPECIFIC_TOGGLE,
            payload: {task, name}
        }
    );
};