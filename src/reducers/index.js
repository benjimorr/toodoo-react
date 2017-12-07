import { combineReducers } from 'redux';
import TodoListGroupReducer from './todo_list_group';

const rootReducer = combineReducers({
  todoListGroup: TodoListGroupReducer
});

export default rootReducer;
