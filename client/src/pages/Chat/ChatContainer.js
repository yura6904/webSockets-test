import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useHttp } from '../../api/http.hook';
import { AuthContext } from '../../context/auth.context';
import { actionCreators } from '../../redux/action-creators/all-action-creators';
import { socket } from '../../socket-connection';
import { Chat } from './Chat';

export const ChatContainer = () => {
    const auth = useContext(AuthContext);
    const {request} = useHttp();
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState();
    const location = useLocation();

    
    const chatsState = useSelector((state) => state);
    const dispatch = useDispatch();
    const {setChatsAC} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        setMessagesList(location.linkProps.messages);
        (async () => {
            const chats = await request('/api/auth/getChatsData', 'POST', {userId: auth.userId})
            const chosenChat = await chats.chats.filter(ch => ch._id === location.linkProps.chatId);
            //await setChatsAC(chosenChat);
            await setMessagesList(chosenChat[0].messages);
        })();
    }, []);
    
    const handlerMsgInput = async (event) => {
        await setMessage('');
        await setMessage(event.target.value);
    }

    const sendMsg = (userId, chatId) => {
        socket.emit('send message', {
            message: message,
            user: userId,
            chatId: chatId
        });
        
        socket.on('save chat message', async (data) => {
            const chatsMessages = await request('/api/auth/saveMessage', 'POST', {chatId: chatId, message: message, userId: auth.userId})
            await setMessagesList(chatsMessages);
        });
    }
    return(
        <Chat userId = {location.linkProps.userId} sendMsg = {sendMsg} handlerMsgInput = {handlerMsgInput}
        messages = {!messagesList ? [] : messagesList} chatId = {location.linkProps.chatId}/>
    )
}