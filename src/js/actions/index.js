import { LOAD_SESSIONS, ON_SESSIONS_LOADED, ON_SESSIONS_ERROR,
         LOAD_USERS, ON_USERS_LOADED, ON_USERS_ERROR } from "../constants/action-types";

export const doLoadSessions = (dispatch) => {
    
    fetch('http://localhost:8080/connections')
    .then(response => response.json())
    .then(connections =>
      {
        dispatch(onSessionsLoaded(connections))
      }
    )

    return {
        type: LOAD_SESSIONS
    }
};

export const onSessionsLoaded = (sessions) => (
    {
        type: ON_SESSIONS_LOADED,
        payload: sessions
    }
);

export const onSessionsError = error => (
    {
        type: ON_SESSIONS_ERROR,
        payload: error
    }
);

export const doLoadUsers = (dispatch) => {
    
    fetch('http://localhost:8080/users')
    .then(response => response.json())
    .then(users =>
      {
        dispatch(onUsersLoaded(users))
      }
    ).catch(error =>
      {
        dispatch(onUsersError(error))
      }
    )

    return {
        type: LOAD_USERS
    }
};

export const onUsersLoaded = (users) => (
    {
        type: ON_USERS_LOADED,
        payload: users
    }
);

export const onUsersError = error => (
    {
        type: ON_USERS_ERROR,
        payload: error
    }
);

