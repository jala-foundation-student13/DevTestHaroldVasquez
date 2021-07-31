import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const url = 'https://randomuser.me/api/?page=2&results=10&seed=abc'
  
  const [apiList, setApiList] = useState()
  
  const apiCall = async () =>{
    const response = await fetch(url, {
      method : 'GET'
    })
    const responseJson = response.json();
    setApiList(responseJson);
  }

  

  useEffect(() => {
    apiCall();
  }, [])

  // console.log(apiList);
  return (
    <div className="App">
      if(!apiList){
        'Cargando...'
      }
      else{
        apiList.map( (element, index) =>{
          return <li key = {index}>
            {element.gender}
            
          </li>
        })
      }
    </div>
  );
}

export default App;
