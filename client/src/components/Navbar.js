import React, { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

export const Navbar = (props) => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }
    return (
        <nav>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to='/chats'>Чаты</NavLink></li>
                    <li><NavLink to='/' onClick={logoutHandler}>Выйти</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}