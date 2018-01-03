import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodoListGroupReducer from './todo_list_group';
import SingleTodoListReducer from './single_todo_list';

const rootReducer = combineReducers({
  todoListGroup: TodoListGroupReducer,
  singleTodoList: SingleTodoListReducer,
  form: formReducer
});

export default rootReducer;
