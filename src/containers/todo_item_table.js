import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AUTH_TOKEN, ROOT_URL, fetchSingleTodoList } from '../actions/index';

class TodoItemTable extends Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.completeOrUndoItem = this.completeOrUndoItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    completeOrUndoItem(id, value) {
        const props = this.props;

        const request = axios({
            method: 'put',
            url: ROOT_URL + `/todos/${this.props.todoId}/items/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_TOKEN
            },
            data: {
                complete: value
            }
        })
        .then(function(response) {
            props.fetchSingleTodoList(props.todoId);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    deleteItem(id) {
        const props = this.props;

        const request = axios({
            method: 'delete',
            url: ROOT_URL + `/todos/${this.props.todoId}/items/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_TOKEN
            }
        })
        .then(function(response) {
            props.fetchSingleTodoList(props.todoId);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    renderItem(itemData) {
        const id = itemData.id;
        const name = itemData.name;
        const createdAt = moment(itemData.created_at).fromNow();

        let complete = null;
        if(itemData.complete) {
            complete = <div>
                            <button type="submit" onClick={(e) => this.completeOrUndoItem(id, false, e)} className="btn btn-primary">Undo</button>
                        </div>
        } else {
            complete = <div>
                            <button type="submit" onClick={(e) => this.completeOrUndoItem(id, true, e)} className="btn btn-success">&#10003;</button>
                        </div>
        }

        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{createdAt}</td>
                <td>
                    {complete}
                </td>
                <td>
                    <div>
                        <button type="submit" onClick={(e) => this.deleteItem(id, e)} className="btn btn-danger">X</button>
                    </div>
                </td>
            </tr>
        );
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSingleTodoList }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoItemTable);
