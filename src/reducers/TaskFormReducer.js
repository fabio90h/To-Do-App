import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
        text: '',
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
        case actionTypes.ADD_TASK:
            console.log('add_task_form', state)
            return(
                {
                    ...state,
                    id: state.id + 1,
                    text: '',
                }
            );
        default: return state;
    }
}