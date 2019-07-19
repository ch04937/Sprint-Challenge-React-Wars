import React, {useState, useEffect} from 'react';
import axios from 'axios';

import StarWars from './components/StarWars.js'

import './App.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
    .get(
      'https://henry-mock-swapi.herokuapp.com/api'
    )
    .then(response => {
      const people = response.data.results;
      setPeople(people)
    })
    .catch(error => 
      console.log('error: ', error)
    )
    }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars Databook</h1>
      {
        people.map(person => {
          return (
            <StarWars
            name = {person.name}
            key = {person}
            birthYear = {person.birth_year}
            gender = {person.gender}/>
          )
        })}
     
    </div>
  );
}

export default App;
