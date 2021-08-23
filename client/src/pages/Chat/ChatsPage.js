import React from 'react';

import {NavLink} from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Chat } from './Chat';
import { ChatContainer } from './ChatContainer';
import {CreateChatWindow} from './createChat/CreateChat'

const ChatsPageContainer = styled.div`
    
`;
const HeaderChats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
`;
const CreateNewChat = styled.div`
    position: fixed;
    right: 3%;
    margin-top: 1%;
    width: 20%;
    background: #ef9a9a;
`;

const CreateChatBtn = styled.input`
    width: 120px;
    height: 30px;
    margin-top: 2em;
`;

const ChatsBlock = styled.div`

`;
const ChatsList = styled.ul`

`;
const ListElement = styled.li`
    width: 70%;
    margin: 0 auto;
`;
const ChatElement = styled.span`
    background: #ef9a9a;
    color: #212121;
    margin-top: 2%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const UserName = styled.p`
    width: 15%;
    align-self: center;
`;
const LastMsg = styled.p`
    margin-left: 15%;
    align-self: center;
    margin-right: 25%;
`;
const LastMsgDate = styled.p`
    margin-left: 15%;
    align-self: center;
`;

export const ChatsPage = (props) => {
    return (
        <ChatsPageContainer>
            <HeaderChats>
                <h3>Чаты</h3>
                    <CreateChatBtn type='button' onClick={() => {props.openCreateChatWindow()}} value='Создать чат'></CreateChatBtn>
            </HeaderChats>
            <CreateNewChat>
                    {props.createChatWindow === false ?
                    <CreateChatWindow checkedUsers = {props.checkedUsers} createNewChat = {props.createNewChat}
                    handlerChatName = {props.handlerChatName} users = {props.users}/> 
                    : false}
            </CreateNewChat>
            <ChatsBlock className='chats-block'>
                <ChatsList className='chats-list'>
                    {
                        props.chats.map((chat, index) => {
                            return(
                                <ListElement className='chat-list-el' key={index}>
                                    <NavLink to={{
                                        pathname: '/chats/id',
                                        linkProps: {
                                            userId: props.userId,
                                            chatId: chat._id,
                                            messages: chat.messages
                                        }
                                    }}> 
                                            <ChatElement>
                                                <UserName>{!chat.messages[chat.messages.length-1].userName ? chat.name
                                                : chat.messages[chat.messages.length-1].userName}</UserName>
                                                <LastMsg>{chat.messages[chat.messages.length-1].message}</LastMsg>
                                            </ChatElement>
                                    </NavLink>
                                </ListElement>
                            )
                        })
                    }
                </ChatsList>
            </ChatsBlock>
            
        </ChatsPageContainer>
    );
}