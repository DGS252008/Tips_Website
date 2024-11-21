import React from 'react';

import battleCatsIcon from '../assets/battlecats.webp';
import dragonBallIcon from '../assets/dragonBallIcon.png';

const Main = () => {
    return (
        <div className="main-container">
            <div className="title-container">
                <h1>Welcome!</h1>
            </div>
            <h3>
                Welcome to Game Mastery, your ultimate guide to improving at Battle Cats
                and Dragon Ball Legends! Whether you're just starting out or striving to perfect
                your skills, we provide tips and strategies to help you succeed. Explore expert
                guides, build powerful teams, and uncover secrets to dominate the competition. Our
                content is designed to turn your gaming challenges into victories. Start your journey
                today and take your gameplay to the next level!
            </h3>
            <div className="a-container">
                <a href="/battlecats" className="game-link">
                    <img src={battleCatsIcon} className="game-icon" />
                    <h3>Click for Battle Cats!</h3>
                </a>
                <a href="/dragonballlegends" className="game-link">
                    <img src={dragonBallIcon} className="game-icon" />
                    <h3>Click for Dragon Ball</h3>
                </a>
            </div>
        </div>
    );
};

export default Main;
