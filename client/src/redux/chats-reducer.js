const SET_CHATS = 'SET_CHATS';
const SET_USERS = 'SET_USERS';
const SET_MSGS_LIST = 'SET_MSGS_LIST';

let initialState = {
    chats: [],
    users: [],
    chosenChat: [],
    idOfChosenChat: 0
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS: {
            state.chats = action.chats.chats;
            return {...state}
        }
        case SET_USERS: {
            state.users = action.users;
            return {...state}
        }
        case SET_MSGS_LIST: {
            state.chosenChat = action.chat;
            return {...state}
        }
        default: {
            return state;
        }
    }
}