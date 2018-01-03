import { FETCH_SINGLE_LIST } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_SINGLE_LIST:
            if(action.payload) {
                return action.payload.data
            } else {
                state = null;
            }
    }
    return state;
}
