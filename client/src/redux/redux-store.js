import {createStore, combineReducers, applyMiddleware} from 'redux';
import {chatsReducer} from './chats-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    chatsData: chatsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;