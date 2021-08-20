const SET_CHATS = 'SET_CHATS';
const SET_USERS = 'SET_USERS';
const SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
    chats: [],
    users: []
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS: {
            debugger;
            state.chats = action.chats.chats;
            return {...state}
        }
        case SET_USERS: {
            state.users = action.users;
            return {...state}
        }
        default: {
            return state;
        }
    }
}