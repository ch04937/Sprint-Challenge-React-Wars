import React from 'react';

function StarWars(props) {
    return (
        <div className = 'wholepage-container'>
            <div className = 'war-grid'>
                <div className = 'grid-card'>
                    <h2>{props.name}</h2>
                    <p>{props.height}</p>
                    <p>{props.mass}</p>
                    <p>{props.hair_color}</p>
                    <p>{props.skin_color}</p>
                    <p>{props.birth_year}</p>
                    <p>{props.gender}</p>
                    <p>{props.homeworld}</p>
                    <p>{props.films}</p>
                    <p>{props.species}</p>
                    <p>{props.vehicles}</p>
                    <p>{props.starships}</p>
                </div>
            </div>
        </div>
    );
}
  
  export default StarWars;