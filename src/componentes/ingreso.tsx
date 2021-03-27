import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

import '../estilos/ingreso.css';

const FormIngreso = () => {
    
    return (
        <Form className="login-form">

            <h2>Ingreso al sistema</h2>

            <div className="col-12 input-effect campo">
        	    <input className="efecto" type="text"></input>
                <label>Usuario</label>
                <span className="focus-border"></span>
            </div>

            <div className="col-12 input-effect campo">
        	    <input className="efecto" type="password"></input>
                <label>Clave</label>
                <span className="focus-border"></span>
            </div>

            <button type="submit" className="text-uppercase btn-block">
                ingresar
                <span className="left icon icon-tablet"></span>
            </button>

        </Form>
    );
}

export default FormIngreso;