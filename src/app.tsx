import React from 'react';
import './estilos/app.css';
import Login from './componentes/ingreso';
import FormIngreso from './componentes/ingreso';

const App = () => {
  
  return (
    <div className="app">
      <section className="app-conteido">
        <h4>
          <span className="font-weight-bold">Bienvenido al sitio de Carpinter&iacute;a</span>.com
        </h4>

        <FormIngreso />
        
      </section>
    </div>
  );

}

export default App;
