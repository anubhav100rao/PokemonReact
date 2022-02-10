import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Card from './Card';


const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`
})


function App() {

  const [data, setData] = useState([])

  async function getAllData() {
    try {
      const result = await api.get('/')
      console.log(result.data.results)
      setData(result.data.results)
      console.log(data)
    } catch(err) {
      console.log(err)
    }
  }

  function clearData() {
    setData([])
  }

  return (
    <div className="App">
      <button
        className='btn'
        onClick = {
          () => getAllData()
        }
      >
        Load data
      </button>
      
      <button
        className='btn'
        onClick={
          () => clearData()
        }
      >
        clear data
      </button>
        {
          data.map(item => <Card item={item} />
          )
        }
        
    </div>
  );
}

export default App;
