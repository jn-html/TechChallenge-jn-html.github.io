import React from 'react';
import {useEffect, useState} from 'react';
// import Redux from 'react-redux';

const ShowName= () => {
  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    fetch('/api/V1/names').then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then (jsonResponse => setInitialState(jsonResponse))
  }, [])
  console.log(initialState)
  return(<div>
    <ul className="member-list">
      {
      initialState.length > 0 && initialState
        .map((name, i) => 
        <li className="member-item" key={i} >{name.name}</li>
        )
      }
    </ul>
    
  </div>)
} 

export default ShowName;
