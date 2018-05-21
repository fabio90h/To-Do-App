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

export const taskHolder = (text) => {
    return (
        {
            type: actionTypes.TASK_HOLDER,
            text,
        }
    );
};