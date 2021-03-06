
import './App.css';
import { useEffect, useState } from 'react';
import Results from './results';
import Person from './person';
import Location from './location';
import Street from './street';
import Coordinates from './coordinates';
import Timezone from './timezone';
import { Button, Input, List, ListItem, ListItemText } from '@material-ui/core';



function App() {
  
  const url = 'https://randomuser.me/api/?page=2&results=10&seed=abc'
  
  const [apiList, setApiList] = useState([]);
  const [listSort, setListSort] = useState([]);
  const [onNameClick, setOnNameClick] = useState(false);
  const [onLastnameClick, setOnLastnameClick] = useState(false);
  const [onEmailClick, setOnEmailClick] = useState(false);
  const [onLocationClick, setOnLocationClick] = useState(false);
  
  const apiCall = async () =>{
    const response = await fetch(url, {
      method : 'GET'
    })
    const responseJson = await response.json();
    setApiList(responseJson.results);
    setListSort(responseJson.results);
  }

  useEffect(() => {
    const sortBU = [].concat(apiList);
    sortBU.sort((a, b) => a.name.first > b.name.first?1:-1)
    setListSort(sortBU);
    console.log(sortBU);
  }, [onNameClick])

  useEffect(() => {
    const sortBU = [].concat(apiList);
    sortBU.sort((a, b) => a.name.last > b.name.last?1:-1)
    setListSort(sortBU);
    console.log(sortBU);
  }, [onLastnameClick])

  useEffect(() => {
    const sortBU = [].concat(apiList);
    sortBU.sort((a, b) => a.email > b.email?1:-1)
    setListSort(sortBU);
    console.log(sortBU);
  }, [onEmailClick])

  useEffect(() => {
    const sortBU = [].concat(apiList);
    sortBU.sort((a, b) => a.location.street.name > b.location.street.name?1:-1)
    setListSort(sortBU);
    console.log(sortBU);
  }, [onLocationClick])

  // useEffect(() => {
  //   setApiList(listSort)
  // }, [listSort])


  useEffect(() => {
    apiCall();
  }, [])

  
//   const handleAux = (event) => {
//     event.preventDefault();
//     const ageInput = event.target.elements.age; // accessing via `form.elements`
//     console.log(ageInput.value); // output: '18'
// };



  return (
    <div className="App">
      
      <h1 align = 'center'>CONTACTS APP</h1>

      {/* <form onSubmit={handleAux}>
        
        <Input type="number" name="age" min="18" max="60" defaultValue="18" />
        <Input type="submit" />
      </form> */}

      {/* {for(var i = 0; i < apiList.length(); i++)} */}
      <table border = '2px'>
        <td onClick = {()=>{
          setOnNameClick(!onNameClick);
        }}>first name</td>
        <td onClick = {()=>{
          setOnLastnameClick(!onLastnameClick);
        }}>last name</td>
        <td onClick = {()=>{
          setOnEmailClick(!onEmailClick);
        }}>email</td>
        <td onClick = {()=>{
          setOnLocationClick(!onLocationClick);
        }}>location</td>
        
      </table>

      
        {
          !listSort? 'Cargando...':
          listSort.map((item, index) => {
            return <div>
            <List align = 'center'>
              <ListItem key = {index}>
                <ListItemText
                  primary = {
                    item.name.first
                  }
                />
              <td>{item.name.last}</td>
              <td>{"____"}</td>
              <td>{item.email}</td>
              <td>{"____"}</td>
              <td>{item.location.street.name}</td>
              </ListItem>

            </List> 
            </div>     
          })
        }
      

      

      
      { 
        !apiList?console.log('wait...'):
        apiList.map((item, index) => {
          //results
          const newResult = new Results();
          newResult.gender = item.gender;
          //name
          const newPerson = new Person();
          newPerson.title = item.name.title;
          newPerson.first = item.name.first;
          newPerson.last = item.name.last;
          newResult.name = newPerson;
          //location
          const newLocation = new Location();
          //location street
          const newLocStreet = new Street();
          newLocStreet.number = item.location.street.number;
          newLocStreet.name = item.location.street.name;
          newLocation.street = newLocStreet;

          newLocation.city = item.location.city;
          newLocation.state = item.location.state;
          newLocation.country = item.location.country;
          newLocation.postcode = item.location.postcode;
          //location coordinates
          const newLocCoordinate = new Coordinates();
          newLocCoordinate.latitude = item.location.coordinates.latitude;
          newLocCoordinate.longitude = item.location.coordinates.longitude;
          newLocation.coordinates = newLocCoordinate;
          //location timezone
          const newLocTimezone = new Timezone();
          newLocTimezone.offset = item.location.timezone.offset;
          newLocTimezone.description = item.location.timezone.description;
          newLocation.timezone = newLocTimezone;

          newResult.location = newLocation;
          //email
          // console.log(newResult);
          
          // return <li key = {index}>{item.gender}</li>
        })
      }
      
    </div>
  );
}

export default App;
