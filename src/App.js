import './App.css';
import { useEffect, useState } from 'react';
import Person from './person'

function App() {
  
  const url = 'https://randomuser.me/api/?page=2&results=10&seed=abc'
  
  const [apiList, setApiList] = useState([])
  
  const apiCall = async () =>{
    const response = await fetch(url, {
      method : 'GET'
    })
    const responseJson = await response.json();
    setApiList(responseJson.results);
  }

  

  useEffect(() => {
    apiCall();
  }, [])

  console.log(apiList);
  return (
    <div className="App">
      <ul>
      { 
        !apiList?console.log('wait...'):
        console.log('success')
      }
      </ul>
    </div>
  );
}

export default App;
