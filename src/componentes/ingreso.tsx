import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
import '../estilos/ingreso.css';

const FormularioIngreso = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard>
            <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                     <strong>Ingreso al sitio</strong>
                </h3>
            </MDBRow>

            <MDBCardBody className='mx-4'>

              <MDBInput label='Tu email' group type='text' validate />
              <MDBInput label='Tu clave' group type='password' validate />
              <p className="font-small grey-text d-flex justify-content-end">                
                <a
                  href="#!"
                  className="dark-grey-text ml-1 font-weight-bold"
                >
                  Olvidé mi clave
                </a>
              </p>
              
              <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol md='6' className='text-center'>
                  <MDBBtn className='btn-block z-depth-1a' type="button" gradient='blue' rounded block>
                    Ingresar
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='6'>
                  <p className='font-small grey-text d-flex justify-content-end'>
                    ¿ No est&aacute; registrado a&uacute;n?
                    <a href='#!' className='blue-text ml-1'>Registrarme ahora</a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>

            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  
};

export default FormularioIngreso;