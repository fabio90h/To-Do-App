import * as actionTypes from '../actions/types';

const INTITAL_STATE = {
    taskList: [],
}

export default (state = INTITAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TASK_SPECIFIC_TOGGLE:
            console.log('list', state)
            return (
                {
                    ...state,
                    taskList: state.taskList.map((task) => {
                        if (task.id === action.payload.task.id) {
                            return (
                                {
                                    ...task,
                                    [action.payload.name]: !action.payload.props, 
                                }
                            );
                        }
                        return task
                    })
                }
            );
        case actionTypes.TASK_SPECIFIC_PROP_HOLDER:
            return (
                {
                    taskList: state.taskList.map((task) => {
                        if (task.id === action.payload.task.id) {
                            return (
                                {
                                    ...task,
                                    [action.payload.name]: action.payload.props,
                                }
                            );
                        }
                        return (task);
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
                            title: action.text,
                            options: false,
                            id: `${action.id}${action.text}`,
                            edit: false,
                        }
                    ],
                    
                }
            );
        case actionTypes.TASK_COMPLETED:
            return (
                {
                    taskList: state.taskList.filter((single) => single.id !== action.task.id),
                }
            );
        default: return state
    }
};