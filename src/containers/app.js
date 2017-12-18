import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer } from 'react-notifications';

import { fetchTodoLists } from '../actions/index';
import TodoListGroup from './todo_list_group';
import ActiveTodo from './active_todo';

class App extends Component {
    componentWillMount() {
        this.props.fetchTodoLists();
    }

    render() {
        return (
            <div className="app-container">
                <NotificationContainer />
                <div className="col-md-4 side-bar">
                    <div className="col-md-10 toodoo-logo">
                        <h1 className="toodoo-logo-text">TooDoo</h1>
                    </div>
                    <div className="col-md-10 todo-list-group">
                        <h3 className="todo-list-group-title">Your Todo Lists:</h3>
                        <TodoListGroup todoLists={this.props.todoListGroup} />
                    </div>
                </div>
                <div className="col-md-8 main-view">
                    <div className="col-md-12 single-todo-list">
                        <ActiveTodo />
                    </div>
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
