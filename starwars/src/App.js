import React, {useState, useEffect} from 'react';
import axios from 'axios';

import StarWars from './components/StarWars'

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState(null);
  useEffect(() => {
    axios.get(
      'https://swapi.co/api/people/?format=json'
    )
    .then(res => {
      setPeople(res.people)
    });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars Databook</h1>
      {people
      ? <StarWars name={people.name}
                  height={people.height}
                  mass={people.mass}
                  hair_color={people.hair_color}
                  skin_color={people.skin_color} 
                  birth_year={people.birth_year} 
                  gender={people.gender}  
                  homeworld={people.homeworld} 
                  films={people.films} 
                  species={people.species} 
                  vehicles={people.vehicles} 
                  starships={people.starships}/>


    : <div>Loading</div>}
    </div>
  );
}

export default App;
