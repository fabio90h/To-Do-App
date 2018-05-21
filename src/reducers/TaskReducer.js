import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
        text: '',
        taskList: [],
        completed: false,
    };

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TASK_HOLDER:
            return (
                {
                    ...state,
                    text: action.text,
                }
            );
        case actionTypes.TASK_TOGGLE:
            console.log("Reducer", state)
            return (
                {
                    ...state,
                    [action.payload.props]: !action.payload.value,
                }
            );
        case actionTypes.ADD_TASK:
            return(
                {
                    ...state,
                    text: '',
                    taskList: 
                    [
                        ...state.taskList,
                        {
                            title: action.task,
                            completed: false,
                        }
                    ],
                    
                }
            );
        default: return state;
    }
}