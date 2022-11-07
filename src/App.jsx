
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ResidentInfo from './components/ResidentInfo';

function App() {

  const [locationType, setLocationType] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocationType(res.data));
  }, [])

  const searchType = () => {
    if (typeId > 126) {
      alert("Solo existen 126 ubicaciones. Por favor ingrese un valor menor")
    } else {
      axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
        .then(res => setLocationType(res.data))
    }
  }


  return (
    <div className="App">
      <div className='background-search'>
        <input className='input-location' placeholder='Enter Id from 1 to 126' type="text" value={typeId} onChange={e => setTypeId(e.target.value)} />
        <button onClick={searchType}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>

      <div className='info-general'>
        <ul className='infoLocation'>
          <li>Name:
            <br />{locationType.name}</li>
          <li>Type:
            <br />{locationType.type}</li>
          <li>Dimension:
            <br />{locationType.dimension}</li>
          <li>Population:
            <br />{locationType.residents?.length}</li>
        </ul>
      </div>
      <div className='card-character'>
        {locationType.residents?.map(residents => (
          <ResidentInfo
            url={residents}
            key={residents}
            />
        ))}
      </div>

    </div>
  )
}

export default App
