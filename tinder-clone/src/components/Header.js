import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from '../assets/tinder-logo.png';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon"/>
            </IconButton>
            <Link to="/">
                <img 
                    className="header__logo"
                    src={TinderLogo}
                    alt=""
                />
            </Link>
            <IconButton>
                <QuestionAnswerIcon className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
