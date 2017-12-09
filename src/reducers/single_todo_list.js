import { FETCH_SINGLE_LIST } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_SINGLE_LIST:
            return action.payload.data
    }
    return state;
}
