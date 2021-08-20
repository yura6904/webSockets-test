import React from 'react';
import styled, { css } from 'styled-components';

const CreateChatContainer = styled.div`
    width: 100%;
    padding: 10px;

`;
const EnterChatName = styled.div`
`;
const ChooseUsers = styled.div`
    display: flex;
`;
const UsersList = styled.ul`
`;
const ListElement = styled.li`
    display: flex;
    margin-top: 10px;
`;
const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`;
const CreateBtn = styled.input`
    
`;

export const CreateChatWindow = (props) => {
    let checkedUsers = [];
    let symbol = [];

    for (let i = 0; i < props.users.length; i++) {
        symbol.push(false);
    }
    return (
        <CreateChatContainer className='create-chat-container'>
            <EnterChatName>
                <p>Введите название чата</p>
                <input type='text' onChange={props.handlerChatName}></input>
            </EnterChatName>
            <p>Выберите пользователей</p>
            <ChooseUsers>
                <UsersList>
                    {props.users.map((u, index) => {
                        debugger;
                        return (
                        
                        <ListElement key={index}>
                            <CheckBox type='button' onClick={() => {
                                debugger
                                    checkedUsers.push(u._id);
                                    symbol[index] = !symbol[index];
                                    debugger;
                                }} 
                                value={symbol[index] === false ? '+' : '-'}/>
                            <span style={{marginLeft:'10%'}}>{u.email}</span>
                        </ListElement>
                    )})}
                </UsersList>
            </ChooseUsers>
            <CreateBtn type='button' value='Создать чат' onClick={() => {props.createNewChat(checkedUsers)}}></CreateBtn>
        </CreateChatContainer>
        
    );
}