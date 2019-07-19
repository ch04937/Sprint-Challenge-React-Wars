import React  from 'react';
import {GridCard, Card, Name} from './StyledWidgets'



export default function StarWars({name, birth_year, gender}) {
  
    return (
        
        <div className = 'war-grid' style= {GridCard} >
            <div className = 'grid-card' style={Card}>
                    <Name> Name: {name}</Name>
                    
                    Birth Year: {birth_year}<br></br>
                    Gender: {gender}
                </div>
            </div>
    );
}
  
