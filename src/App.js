import React from 'react';
import Dinner from './dinner';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Assalam o Aleikum from Muhammad Javaid Nawab</h1>
      
      </header>
       
      <h2> PIAIC Boot Camp 2020 - Class 03 - Demo React App</h2>
      <h3> Github Repo:  </h3>
      <h3> Surge URL  :</h3>    

      <Dinner dishName = "Chicken Nihari" sweetDish="Kheer"/> 
      <hr/>
      <Dinner dishName = "Chicken Biryani" sweetDish="Jalebi"/> 
      <hr/>
      <Dinner dishName = "Chicken Karhaii" sweetDish="Gajar Ka Halwa"/> 
 
     

    </div>
  );
}

export default App;
