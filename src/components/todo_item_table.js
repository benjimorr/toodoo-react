import React, { Component } from 'react';
import moment from 'moment';

export default class TodoItemTable extends Component {
    renderItem(itemData) {
        const id = itemData.id;
        const name = itemData.name;
        const createdAt = moment(itemData.created_at).fromNow();

        if(itemData.complete) {
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{createdAt}</td>
                    <td>Yes</td>
                    <td>N/A</td>
                </tr>
            );
        } else {
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{createdAt}</td>
                    <td>
                        <div>
                            <button type="submit" className="btn btn-success">&#10003;</button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <button type="submit" className="btn btn-danger">X</button>
                        </div>
                    </td>
                </tr>
            );
        }
    }

    render() {
        if(this.props.items.length == 0) {
            return <div className="no-todo-items">No items here!</div>;
        } else {
            return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(this.renderItem)}
                    </tbody>
                </table>
            );
        }
    }
}
