import { combineReducers } from 'redux';
import TaskFormReducer from './TaskFormReducer';
import TaskListReducer from "./TaskListReducer";
export default combineReducers (
    {
        taskForm: TaskFormReducer,
        taskList: TaskListReducer,
    }
)