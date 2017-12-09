import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodoLists } from '../actions/index';
import TodoListGroup from '../components/todo_list_group';

class App extends Component {
    componentWillMount() {
        this.props.fetchTodoLists();
    }

    render() {
        return (
            <div className="col-md-3">
                <TodoListGroup todoLists={this.props.todoListGroup} />
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
