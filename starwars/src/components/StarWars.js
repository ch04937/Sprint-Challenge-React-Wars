import React  from 'react';
import {GridCard, Card} from './StyledWidgets'



export default function StarWars({name, birth_year, gender}) {
  
    return (
        <div className = 'war-grid' style= {GridCard} >
            <div className = 'grid-card' style={Card}>
                    Name: {name}<br></br>
                    Birth Year: {birth_year}<br></br>
                    Gender: {gender}
                </div>
            </div>
    );
}
  
