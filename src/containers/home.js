import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import { fetchTodoLists, fetchSingleTodoList, cookies } from '../actions/index';
import NewTodoList from './new_todo_list';
import TodoListGroup from './todo_list_group';
import ActiveTodo from './active_todo';

class Home extends Component {
    constructor(props) {
        super(props);
        this.endSession = this.endSession.bind(this);
    }

    componentWillMount() {
        this.props.fetchTodoLists(() => {
            this.props.history.push('/login');
        });
    }

    endSession() {
        cookies.set('authToken', null);
        this.props.fetchSingleTodoList(null);
        NotificationManager.info("Logged out successfully.");
    }

    render() {
        return (
            <div className="app-container">
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/login" onClick={this.endSession}>
                        Logout
                    </Link>
                </div>
                <div className="col-md-4 side-bar">
                    <div className="col-md-10 toodoo-logo">
                        <h1 className="toodoo-logo-text">TooDoo</h1>
                    </div>
                    <div className="col-md-10 create-todo-list">
                        <NewTodoList history={this.props.history} />
                    </div>
                    <div className="col-md-10 todo-list-group">
                        <h3 className="todo-list-group-title">Your Todo Lists:</h3>
                        <TodoListGroup todoLists={this.props.todoListGroup} history={this.props.history} />
                    </div>
                </div>
                <div className="col-md-8 main-view">
                    <div className="col-md-12 single-todo-list">
                        <ActiveTodo history={this.props.history} />
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
    return bindActionCreators({ fetchTodoLists, fetchSingleTodoList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
