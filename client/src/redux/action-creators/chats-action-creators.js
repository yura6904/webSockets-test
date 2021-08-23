const SET_CHATS = 'SET_CHATS';
const SET_USERS = 'SET_USERS';
const SET_MSGS_LIST = 'SET_MSGS_LIST';

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
export const setMessagesListAC = (users) => {
    return (dispatch) => {
        dispatch({type: SET_MSGS_LIST, users});
    }
};
