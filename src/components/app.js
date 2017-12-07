import React, { Component } from 'react';

import TodoListGroup from '../containers/todo_list_group';

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoListGroup />
            </div>
        );
    }
}
