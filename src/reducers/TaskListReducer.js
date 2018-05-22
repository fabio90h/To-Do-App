import * as actionTypes from '../actions/types';

const INTITAL_STATE = {
    taskList: [],
}

export default (state = INTITAL_STATE, action) => {
    switch (action.type) {
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
            console.log('add_task_list', state)
            return(
                {
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
        default: return state
    }
};