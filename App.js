import React from 'react';
import Repaso from './Componetes/Repaso/Repaso';
import Pepe from './Componetes/Repaso/Button';
import Conteiner from './Componetes/Repaso/Conteiner';
import './App.css';

function App() {
  return (
    <div className="App">
          <Repaso text="Guenas Tardes"/>
          <Pepe onClick={() => alert("Hice un Click")} label="Soy un boton" />
          <Pepe onClick={() => alert("botoncito")} label="botoncito" />
          <Conteiner> </Conteiner>
    </div>
  );
}

export default App;