import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

import '../estilos/login.css';

const Login = () => {
    
    return (
        <Form className="login-form">

            <strong>Registraci&oacute;n</strong>

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
    );
}

export default Login;