
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  const [category,setCategory] = useState("");
  const fetchData = (excuse)=>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{setCategory(res.data[0].excuse)});
     
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <div className='btn'>
        <h4>Generate Excuse</h4>
          <button onClick={()=>fetchData("office")}>OFFICE</button>
          <button onClick={()=>fetchData("party")}>PARTY</button>
          <button onClick={()=>fetchData("family")}>FAMILY</button>
      </div>
      <div>
        <h3>{category}</h3>
      </div>
     
    </div>
  );
}

export default App;
