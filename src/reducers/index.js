import { combineReducers } from 'redux';
import TodoListGroupReducer from './todo_list_group';
import SingleTodoListReducer from './single_todo_list';

const rootReducer = combineReducers({
  todoListGroup: TodoListGroupReducer,
  singleTodoList: SingleTodoListReducer
});

export default rootReducer;
