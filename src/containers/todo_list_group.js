import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodoLists } from '../actions/index';

class TodoListGroup extends Component {
    componentDidMount() {
        this.props.fetchTodoLists();
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodoLists }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoListGroup);
