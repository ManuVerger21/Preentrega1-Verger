import React from 'react';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda de Repuestos de Automoviles." />
    </div>
  );
}

export default App;
