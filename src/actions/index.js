import axios from 'axios';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTMwMTM3MDV9.FLpRPTdrvDNi-KPCrI5tn54nbechOLZULO2VIJKlmP8";
const ROOT_URL = "https://my-toodoo-api.herokuapp.com";

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
