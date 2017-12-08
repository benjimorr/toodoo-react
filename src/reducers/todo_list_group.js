import { FETCH_TODO_LISTS } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_TODO_LISTS:
            return [action.payload.data, ...state];
    }
    return state;
}
