import React from 'react';
import './App.css';

import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  
  return (
    <div className="App">
      <section className="app-content">
        
        <Form className="login-form">
          
          <h3>
            <span className="font-weight-bold">Carpinter&iacute;a</span>.com            
          </h3>

          <FormGroup>
            <Label>E-mail</Label>
            <Input type="email" placeholder="Email"></Input>
          </FormGroup>

          <FormGroup>
            <Label>Contrase&ntilde;a</Label>
            <Input type="password" placeholder="Contrase&ntilde;a"></Input>
          </FormGroup>

          <Button className="text-uppercase btn-lg btn-dark btn-block">
            ingresar
          </Button>
        </Form>
        
      </section>
    </div>
  );

}

export default App;
