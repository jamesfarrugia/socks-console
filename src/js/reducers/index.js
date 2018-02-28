import { LOAD_SESSIONS, ON_SESSIONS_LOADED, ON_SESSIONS_ERROR,
    LOAD_USERS, ON_USERS_LOADED, ON_USERS_ERROR } from "../constants/action-types";

const initialState = {
    sessions: [],
    loadingSessions: false
};

const rootReducer = (state = initialState, action) => 
{
    switch(action.type)
    {
        case LOAD_SESSIONS:
        return {
            ...state, 
            loadingSessions: true
            };
        case ON_SESSIONS_LOADED:
        return {
            ...state, 
            sessions: action.payload,
            loadingSessions: false
            };

        case LOAD_USERS:
        return {
            ...state, 
            loadingUsers: true,
            usersError: null
            };
        case ON_USERS_LOADED:
        return {
            ...state, 
            users: action.payload,
            loadingUsers: false
            };
        case ON_USERS_ERROR:
        return {
            ...state, 
            users: [],
            loadingUsers: false,
            usersError: action.payload
            };

        default:
            return state;
    }
}

export default rootReducer;