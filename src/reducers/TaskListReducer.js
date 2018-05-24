import * as actionTypes from '../actions/types';

const INTITAL_STATE = {
    completed: false,
    taskList: [],
    completedList: []
}

export default (state = INTITAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TASK_TOGGLE:
            return (
                {
                    ...state,
                    [action.payload.props]: !action.payload.value,
                }
            );
        //Change the property of a specific task
        case actionTypes.TASK_SPECIFIC_TOGGLE:
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
                    ...state,
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
            if (action.text === '') {
                return (
                    {
                        ...state
                    }
                );
            }
            return(
                {
                    ...state,
                    taskList: 
                    [
                        ...state.taskList,
                        {
                            title: action.text,
                            options: false,
                            id: `${action.id}${action.text}`,
                            edit: false,
                            dateCompleted: ''
                        }
                    ],
                    
                }
            );
        case actionTypes.TASK_COMPLETED:
            return (
                {
                    ...state,
                    taskList: state.taskList.filter((single) => single.id !== action.task.id),
                    completedList: [...state.completedList,
                        ...state.taskList.filter((completed) => completed.id === action.task.id ),
                    ]
                }
            );
        case actionTypes.COMPLETED_REMOVE:
            return (
                {
                    ...state,
                    completedList: state.completedList.filter((singleComp) => singleComp.id !== action.completed.id),
                }
            );
        default: return state
    }
};