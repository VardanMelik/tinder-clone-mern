import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from '../assets/tinder-logo.png';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon"/>
            </IconButton>
            <img 
                className="header__logo"
                src={TinderLogo}
                alt=""
            />
            <IconButton>
                <QuestionAnswerIcon className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
