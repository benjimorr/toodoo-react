import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodoLists } from '../actions/index';

class TodoListGroup extends Component {
    componentWillMount() {
        this.props.fetchTodoLists();
    }

    renderTodoLists(todoData) {
        const id = todoData.id;
        const title = todoData.title;
        const category = todoData.category;

        return (
            <li key={id}>
                <h3>{title}</h3>
                <p>{category}</p>
            </li>
        );
    }

    render() {
        console.log(this.props.todoListGroup);
        return (
            <div>
                <ul>
                    {this.props.todoListGroup.map(this.renderTodoLists)}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoListGroup);
