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
      <h3> Github Repo: https://github.com/Mjavaidnawab/bc20k-class3-demo-app  </h3>
      <h3> Surge URL  : http://bc20k-class3-demo-app.surge.sh/</h3>    

      <Dinner dishName = "Chicken Nihari" sweetDish="Kheer"/> 
      <hr/>
      <Dinner dishName = "Chicken Biryani" sweetDish="Jalebi"/> 
      <hr/>
      <Dinner dishName = "Chicken Karhaii" sweetDish="Gajar Ka Halwa"/> 
 
     

    </div>
  );
}

export default App;
