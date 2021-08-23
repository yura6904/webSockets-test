import React from 'react';
import styled, { css } from 'styled-components';
import {useLocation} from 'react-router-dom';

const Container = styled.div`
    width: 70%;
    margin: 30px auto;
    display: block;
`;
const MessageField = styled.div`
    background-color: #ffcdd2;
    width: 100%;
    height: 600px;
`;
const InputsDiv = styled.div`
    padding: 0 3%;
    display: flex;
    margin-top: 2%!important;
    justify-content: space-between;
`;
const MessageInput = styled.input`
    width: 80%!important;
    border-left: 1px solid #b71c1c!important;
    border-right: 1px solid #b71c1c!important;
    border-bottom: 1px solid #b71c1c!important;
    align-self: center;
    &:focus {
        border-bottom: 2px solid #b71c1c!important;
    }
`;
const SendButton = styled.input`
    margin-left: 2%; 
    background: #e53935;
    color: white;
    width: 14%;
    height: 40px;
    border: 1px solid #b71c1c!important;
    border-radius: 10%;
    &:hover {
        cursor: pointer
    }
`;
export const Chat = (props) => {
    debugger;
    return (
        <Container className='chat-container container'>
            <MessageField>
                <ul>
                    {props.messages.length !== 0 ? (
                        props.messages.map(m => {
                            return(
                            
                            <li>
                                <p>{m.message}</p>
                            </li>
                        )})
                        ) : (
                            <div>
                                чат пуст
                            </div>
                        )
                    }
                </ul>
            </MessageField>
            <InputsDiv>
                <MessageInput type='text' onChange = {props.handlerMsgInput}></MessageInput>   
                <SendButton type='button' value='Отправить' onClick={() => {debugger; props.sendMsg(props.userId, props.chatId)}}/>
            </InputsDiv>
        </Container>
        
    );
}