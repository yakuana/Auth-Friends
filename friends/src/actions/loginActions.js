import axios from 'axios';

// axios with authorization 
import { axiosWithAuth } from './utils/axiosWithAuth.js'

// fetch for friends array data  
export const FETCH_FRIENDS_DATA_START = 'FETCH_FRIENDS_DATA_START'; 
export const FETCH_FRIENDS_DATA_SUCCESS = 'FETCH_FRIENDS_DATA_SUCCESS';
export const FETCH_FRIENDS_DATA_FAILURE = 'FETCH_FRIENDS_DATA_FAILURE';

// post for login data 
export const POST_LOGIN_DATA_START = 'POST_LOGIN_DATA_START'; 
export const POST_LOGIN_DATA_SUCCESS = 'POST_LOGIN_DATA_SUCCESS';
export const POST_LOGIN_DATA_FAILURE = 'POST_LOGIN_DATA_FAILURE';

// post for new friend object data 
export const POST_FRIEND_DATA_START = 'POST_FRIEND_DATA_START'; 
export const POST_FRIEND_DATA_SUCCESS = 'POST_FRIEND_DATA_SUCCESS';
export const POST_FRIEND_DATA_FAILURE = 'POST_FRIEND_DATA_FAILURE';


export const getFriendsData = () => dispatch => {

    // loading data 
    dispatch({ type: FETCH_FRIENDS_DATA_START });

    // add authorization to axios promise 
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            // successful 
            console.log("response data", response)
            
            dispatch({ type: FETCH_FRIENDS_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_FRIENDS_DATA_FAILURE, payload: error.response });
        });
};

export const postLoginData = (credentials) => (dispatch) => {

    // loading data 
    dispatch({ type: POST_LOGIN_DATA_START });
    
    
    axios
        .post('http://localhost:5000/api/login', credentials)

        .then(response => {
            // successful 
            console.log("post api response object", response);
            
            localStorage.setItem('token', response.data.payload);
             
            dispatch({ type: POST_LOGIN_DATA_SUCCESS, payload: response });
        }) 

        .catch(error => {
            // unsuccessful 
            console.log("The api is currently down.", error.response);

            dispatch({ type: POST_LOGIN_DATA_FAILURE, payload: error.response });
        });
}

export const postFriendData = (friendObj) => (dispatch) => {

    // loading data 
    dispatch({ type: POST_FRIEND_DATA_START });
    
    
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', friendObj)

        .then(response => {
            // successful 
            console.log("post api response object", response);
             
            dispatch({ type: POST_FRIEND_DATA_SUCCESS, payload: response });
        }) 

        .catch(error => {
            // unsuccessful 
            console.log("The api is currently down.", error.response);

            dispatch({ type: POST_FRIEND_DATA_FAILURE, payload: error.response });
        });
}

