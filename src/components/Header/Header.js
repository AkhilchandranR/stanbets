import React from 'react';
import './Header.css';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { showUserSettings } from '../../States/slices/chatSlice';
import { Link } from 'react-router-dom'; 

function Header() {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <div className="header__logo">
                <h2>StanBets</h2>
                <div className="header__users">
                    <GroupsRoundedIcon/>
                    <p>1234</p>
                </div>
            </div>
            {/* <div className="header__buttons">
                <Link to="/login">
                    <button className="header__login">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="header__signup">Sign-Up</button>
                </Link>
            </div> */}
            <div className="header__user" onClick={()=>{dispatch(showUserSettings())}}>
                <div className="header__username">
                    <StarIcon/>
                    <p>Username</p>
                </div>
                <div className="header__amount">
                    <p>$6.00</p>
                </div>
            </div>
        </div>
    )
}

export default Header
