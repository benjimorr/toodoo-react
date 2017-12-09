import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoItems from '../components/todo_items';

class ActiveTodo extends Component {
    render() {
        if(this.props.singleTodoList) {
            return (
                <div>
                    <h2 className="todo-list-title">{this.props.singleTodoList.title}</h2>

                    <TodoItems todoId={this.props.singleTodoList.todo_id} items={this.props.singleTodoList.items} />
                </div>
            );
        } else {
            return (
                <div>
                    <h2 className="todo-list-title">Please select an item from the sidebar</h2>
                </div>
            );
        }
    }
}

function mapStateToProps({ singleTodoList }) {
    return { singleTodoList };
}

export default connect(mapStateToProps)(ActiveTodo);
