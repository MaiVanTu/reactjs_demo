import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editTask,
    search,
    sort
});

export default myReducer;