import React, { useReducer } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage';
import store from './redux/redux-store';
import { Chat } from './pages/Chat/Chat';
import { ChatsPageContainer } from './pages/Chat/ChatsPageContainer';

export const useRoutes = (isAuthenticated, userId) => {
    //chats={store.getState().chatsData.chats}
    
    if (isAuthenticated) {
        debugger;
        return(
            <Switch>
                <Route path="/chats" exact>
                    <ChatsPageContainer userId={userId}/>
                </Route>
                <Route path="/chats/id" exact>
                    <Chat />
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}