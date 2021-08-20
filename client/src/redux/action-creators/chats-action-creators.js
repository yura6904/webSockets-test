const SET_CHATS = 'SET_CHATS';
const SET_USERS = 'SET_USERS';

export const setChatsAC = (chats) => { 
    return (dispatch) => {
        dispatch({type: SET_CHATS, chats});
    }
};
export const setUsersAC = (users) => {
    return (dispatch) => {
        dispatch({type: SET_USERS, users});
    }
};
