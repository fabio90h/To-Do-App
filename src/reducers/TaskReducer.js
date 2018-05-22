import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
        text: '',
        taskList: [],
        completed: false,
        id: 0,
    };

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TASK_PROP_HOLDER:
            return (
                {
                    ...state,
                    [action.payload.props]: action.payload.value,
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
        case actionTypes.TASK_SPECIFIC_TOGGLE:
            return (
                {
                    ...state,
                    taskList: state.taskList.map((task) => {
                        if (task.id === action.payload.task.id) {
                            return (
                                {
                                    ...task,
                                    [action.payload.name]: !action.payload.task.completed, 
                                }
                            );
                        }
                        return task
                    })
                }
            );
        case actionTypes.ADD_TASK:
            console.log('add_task', state)
            return(
                {
                    ...state,
                    id: state.id + 1,
                    text: '',
                    taskList: 
                    [
                        ...state.taskList,
                        {
                            title: action.task,
                            options: false,
                            completed: false,
                            id: state.id
                        }
                    ],
                    
                }
            );
        default: return state;
    }
}