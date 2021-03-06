import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHttp } from '../../api/http.hook';
import { ChatsPage } from './ChatsPage';
import { actionCreators } from '../../redux/action-creators/all-action-creators';
import { AuthContext } from '../../context/auth.context';
import { socket } from '../../socket-connection';

export const ChatsPageContainer = (props) => {
    const auth = useContext(AuthContext);
    const {request} = useHttp();
    const chatsState = useSelector((state) => state);
    const dispatch = useDispatch();
    const {setChatsAC, setUsersAC} = bindActionCreators(actionCreators, dispatch);

    const [createChat, setCreateChat] = useState(false);
    const [usersInfo, setUsersInfo] = useState([]);
    const [nameOfChat, setNameOfChat] = useState('');
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        (async () => {
            await setUsersAC(
                await request('/api/auth/getUsersData', 'GET')
            );
            await setUsersArrayInfo(chatsState.chatsData.users.users);
        })();
        (async () => {
            await setChatsAC(
                await request('/api/auth/getChatsData', 'POST', {userId: auth.userId})
            );
            await setMessagesList(chatsState.chatsData.chats.messages);
        })();
    }, []);

    const openCreateChat = () => {
        setCreateChat(!createChat);
    }

    const setUsersArrayInfo = (arr = []) => {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]._id !== auth.userId) 
            resultArr.push(arr[i]);
            else continue;
        }
        setUsersInfo(resultArr);
    }

    const handlerChatName = event => {
        setNameOfChat(event.target.value);
        console.log(nameOfChat);

    }

    const createNewChat = (arrOfUsersId) => {
        (async () => {
            await setChatsAC(
                await request('/api/auth/createNewChat', 'POST', {usersId: arrOfUsersId, mainUser: auth.userId, chatName: nameOfChat})
            );
        })();      
    }
    return(
        <ChatsPage userId = {props.userId} chats = {!chatsState.chatsData.chats ? [] : chatsState.chatsData.chats}
            createChatWindow = {createChat} openCreateChatWindow = {openCreateChat} users = {!usersInfo ? [] : usersInfo}
            createNewChat = {createNewChat} handlerChatName = {handlerChatName} messages = {!messagesList ? [] : messagesList}/>
    )
}