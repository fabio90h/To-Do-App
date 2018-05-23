import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
        text: '',
        id: 0,
        completed: false
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
        console.log(action.payload.value)
            return (
                {
                    ...state,
                    [action.payload.props]: !action.payload.value,
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
                    id: state.id + 1,
                    text: '',
                }
            );
        default: return state;
    }
}