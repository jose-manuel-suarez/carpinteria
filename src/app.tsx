import React from 'react';
import './estilos/app.css';
import Login from './componentes/login';
import FormularioIngreso from './componentes/ingreso';

const App = () => {
  
  return (
    <div className="app">
      <section className="app-conteido">
        <h3>
          <span className="font-weight-bold">Carpinter&iacute;a</span>.com
        </h3>

        <Login />
        <FormularioIngreso />
        
      </section>
    </div>
  );

}

export default App;
