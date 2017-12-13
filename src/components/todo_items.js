import React from 'react';

import TodoItemTable from '../containers/todo_item_table';

export default (props) => {
    const incompleteItems = props.items.filter((item) => item.complete === false);
    const completeItems = props.items.filter((item) => item.complete === true);

    return (
        <div className="todo-list-items">
            <h3>Items:</h3>

            <div className="incomplete-items">
                <h4>Incomplete:</h4>
                <TodoItemTable todoId={props.todoId} items={incompleteItems} />
            </div>

            <div className="complete-items">
                <h4>Complete:</h4>
                <TodoItemTable todoId={props.todoId} items={completeItems} />
            </div>
        </div>
    );
}
