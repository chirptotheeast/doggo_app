import './App.css';
import DogDropdown from './components/DogDropdown';
import DogGallery from './components/DogGallery';
import React, { useState, useEffect } from 'react';

const BASE_URL = "https://dog.ceo/api/breeds/list/all"

function App() {
  const [dogList, setDogList] = useState('')
  const [selectedDog, setSelectedDog] = useState('')

  const selectedDogUpdate = (selectedDog) => {
    setSelectedDog(selectedDog)
  }


 useEffect(() => {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setDogList(data.message)
    })
 }, [])
  
 console.log(setDogList)
  return (
  <div>
    <DogDropdown dogList={dogList} breedSelected={selectedDogUpdate}/>
    <DogGallery breedSelected={selectedDog}/>
  </div>
  );
}

export default App;
