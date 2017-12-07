import axios from 'axios';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTI3MDQ0MTZ9.0CfE_76sCETJ0PKyV_jvOWPrgBL7LXl08XrIp7bR28o";
const ROOT_URL = "https://my-toodoo-api.herokuapp.com";

export const FETCH_TODO_LISTS = "FETCH_TODO_LISTS";

export function fetchTodoLists() {
    const url = `${ROOT_URL}/todos`
    const request = axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN
        }
    });

    return {
        type: FETCH_TODO_LISTS,
        payload: request
    };
}
