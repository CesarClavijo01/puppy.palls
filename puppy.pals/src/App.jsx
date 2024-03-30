import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data.js'


function App() {

  const [puppies, setPuppies] = useState(puppyList);

  const [featPupId, setFeatPupId] = useState(null);

  const featPup = puppies.find(pup => pup.id === featPupId)

  return (
    <>
      <div>
        {puppies.map( puppy => {
          return <p className='puppyName' onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>})}
          {featPupId && (
          <div className='puppyInfo'>
            <h2>{featPup.name}</h2>
            <ul className='infoList'>
              <li>{featPup.email}</li>
              <li>{featPup.age}</li>
            </ul>
          </div>)}

      </div>
    </>
  )
}

export default App
