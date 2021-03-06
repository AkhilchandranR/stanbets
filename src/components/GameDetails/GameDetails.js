import React from 'react';
import './GameDetails.css';
import { useDispatch } from 'react-redux';
import { openBet } from '../../States/slices/userSlice';

function GameDetails() {
    const dispatch = useDispatch();
    return (
        <div className="gamedetails" onClick={()=>{dispatch(openBet())}}>
            <div className="gamedetails__heading">
                <h5>League of Legends</h5>
                <p>18/10/21</p>
                <p>19:00 UTC</p>
            </div>
            <div className="gamedetails__body">
                <h3>Team1 vs Team2</h3>
                <div className="gamedetails__bets">
                    <div className="gamedetails__bet">
                        <p>1.25</p>
                    </div>
                    <div className="gamedetails__bet">
                        <p>3.33</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetails
