import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodoLists } from '../actions/index';
import TodoListGroup from './todo_list_group';
import ActiveTodo from './active_todo';

class App extends Component {
    componentWillMount() {
        this.props.fetchTodoLists();
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4 todo-list-group">
                    <TodoListGroup todoLists={this.props.todoListGroup} />
                </div>
                <div className="col-md-8 single-todo-list">
                    <ActiveTodo />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ todoListGroup }) {
    return { todoListGroup };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodoLists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
