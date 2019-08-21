import {
    FETCH_FRIENDS_DATA_START,
    FETCH_FRIENDS_DATA_SUCCESS,
    FETCH_FRIENDS_DATA_FAILURE,
    POST_LOGIN_DATA_START,
    POST_LOGIN_DATA_SUCCESS,
    POST_LOGIN_DATA_FAILURE,
    POST_FRIEND_DATA_START,
    POST_FRIEND_DATA_SUCCESS,
    POST_FRIEND_DATA_FAILURE,
} from '../actions/index.js';

// initial state data 
const initialState = {
    friends: [],
    dataIsLoading: false, 
    dataError: '',
    newFriend: {},
    friendIsLoading: false, 
    friendError: '',
    credentials: {
        username: '', 
        password: '',
    },
    credIsLoading: false,
    credError: ''
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_FRIENDS_DATA_START:
            return {
                ...state,
                dataIsLoading: true,
                dataError: ''
            };
        case FETCH_FRIENDS_DATA_SUCCESS:
            return {
                ...state,
                dataIsLoading: false,
                friends: action.payload,
                dataError: ''
            };
        case FETCH_FRIENDS_DATA_FAILURE:
            return {
                ...state,
                dataIsLoading: false,
                dataError: action.payload
            };
        case POST_LOGIN_DATA_START:
            return {
                ...state,
                credIsLoading: true,
                credError: ''
            };
        case POST_LOGIN_DATA_SUCCESS:
            return {
                ...state,
                credIsLoading: false,
                credentials: action.payload,
                credError: ''
            };
        case POST_LOGIN_DATA_FAILURE:
            return {
                ...state,
                credIsLoading: false,
                credError: action.payload
            };
        case POST_FRIEND_DATA_START:
            return {
                ...state,
                frienddIsLoading: true,
                friendError: ''
            };
        case POST_FRIEND_DATA_SUCCESS:
            return {
                ...state,
                friendIsLoading: false,
                friend: action.payload,
                friends: [...state.friends, action.payload],
                friendError: ''
            };
        case POST_FRIEND_DATA_FAILURE:
            return {
                ...state,
                friendIsLoading: false,
                friendError: action.payload
            };
        default:
            return state;
        }


};