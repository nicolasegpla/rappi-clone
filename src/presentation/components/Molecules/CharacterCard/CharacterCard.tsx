import React from 'react';
import './charactercard.scss';

type CharacterCardProps = {
    title: string;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ title }) => {
    return (
        <div className="charactercard">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            
            
        </div>
    );
};

export default CharacterCard;
