import React from 'react';

function renderTodoLists(list) {
    let id = list.id;
    let title = list.title;
    let category = list.category;

    return (
        <li key={id} className="list-group-item">
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </li>
    );
}

export default props => {
    if(props.todoLists[0]) {
        return (
            <ul className="list-group">
                {props.todoLists[0].map(item => renderTodoLists(item))}
            </ul>
        );
    } else {
        return (
            <ul>
                <li>Loading...</li>
            </ul>
        );
    }
};
