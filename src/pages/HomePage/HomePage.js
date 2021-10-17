import React from 'react';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import GameDetails from '../../components/GameDetails/GameDetails';
import Header from '../../components/Header/Header';
import './HomePage.css';
import StarIcon from '@mui/icons-material/Star';
import ReceiptIcon from '@mui/icons-material/Receipt';

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <div className="homepage__body">
                <ChatWindow/>
                <div className="homepage__contents">
                    <div className="homepage__options">
                        <div className="homepage__searchbar">
                            <input type="text" placeholder="Search for matches (Game or Team)..."/>
                        </div>
                        <div className="homepage__optionIcons">
                            <div className="homepage__icon">
                                <ReceiptIcon/>
                            </div>
                            <div className="homepage__icon">
                                <StarIcon className="star"/>
                            </div>
                        </div>
                    </div>
                    <div className="homepage__gamedetails">
                        <GameDetails/>
                        <GameDetails/>
                        <GameDetails/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HomePage
