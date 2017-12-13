import axios from 'axios';

export const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTMyMDY5Nzh9.crU81cyAN7Rnoo_l3BYz_qBT-ULIajoel6BuzyexA6c";
export const ROOT_URL = "https://my-toodoo-api.herokuapp.com";

export const FETCH_TODO_LISTS = "FETCH_TODO_LISTS";
export const FETCH_SINGLE_LIST = "FETCH_SINGLE_LIST";

export function fetchTodoLists() {
    const url = `${ROOT_URL}/todos`;
    const request = axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN
        }
    })
    .catch(function (error) {
        console.log(error);
    });

    return {
        type: FETCH_TODO_LISTS,
        payload: request
    };
}

export function fetchSingleTodoList(id) {
    const url = `${ROOT_URL}/todos/${id}`;
    const request = axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN
        }
    })
    .catch(function (error) {
        console.log(error);
    });

    return {
        type: FETCH_SINGLE_LIST,
        payload: request
    };
}
