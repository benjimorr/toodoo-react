import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export let AUTH_TOKEN = cookies.get('authToken') || null;
export const ROOT_URL = "https://my-toodoo-api.herokuapp.com";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const FETCH_TODO_LISTS = "FETCH_TODO_LISTS";
export const FETCH_SINGLE_LIST = "FETCH_SINGLE_LIST";

export function login(values, callback) {
    const request = axios.post(`${ROOT_URL}/sessions`, values)
        .then(function(response) {
            cookies.set('authToken', response.data.auth_token, { path: '/' });
            AUTH_TOKEN = cookies.get('authToken');
            NotificationManager.success('Welcome back!', 'Login successful');
            callback();
        })
        .catch(function(err) {
            if(err.response.status === 401) {
                NotificationManager.error("Incorrect login. Please try again.");
            } else {
                NotificationManager.error("Something went wrong. Please try again.");
            }
        });

    return {
        type: LOGIN,
        payload: request
    }
}

export function signup(values, callback) {
    const request = axios.post(`${ROOT_URL}/users`, values)
        .then(function(response) {
            cookies.set('authToken', response.data.auth_token.result, { path: '/' });
            AUTH_TOKEN = cookies.get('authToken');
            NotificationManager.success('Welcome to Toodoo!', 'Account created');
            callback();
        })
        .catch(function(err) {
            if(err.response.data.errors.email) {
                NotificationManager.error("Could not create account. That email is already taken.");
            } else {
                NotificationManager.error("Something went wrong. Please try again.");
            }
        });

    return {
        type: SIGNUP,
        payload: request
    }
}

export function fetchTodoLists(callback) {
    const url = `${ROOT_URL}/todos`;
    const request = axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN
        }
    })
    .catch(function (error) {
        NotificationManager.error("Session expired. Please login again.");
        callback();
    });

    return {
        type: FETCH_TODO_LISTS,
        payload: request
    };
}

export function fetchSingleTodoList(id) {
    if(!id) {
        return {
            type: FETCH_SINGLE_LIST,
            payload: null
        }
    }

    const url = `${ROOT_URL}/todos/${id}`;
    const request = axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN
        }
    })
    .catch(function (error) {
        NotificationManager.error("Something went wrong. Please try again.");
    });

    return {
        type: FETCH_SINGLE_LIST,
        payload: request
    };
}
