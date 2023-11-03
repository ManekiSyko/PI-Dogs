import styled from "styled-components"
import { Link } from "react-router-dom";
import React from 'react'

const Pagina = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4.7em;
`
const Cartita = styled.div `
  font-family: "YellowCandy";
  position: relative;
  background-color: #ffd358;
  box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
  height: 55em;
  border-width: 4px;
  border-style: solid;
  border-color: #ffd780;
  margin-left: 35em;
  margin-right: 35em;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
`
const Titulo = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
const Texto = styled.h1 `
  font-family: 'YellowCandy';
  color: #6b4619;
  margin-top: 1em;
  font-size: 4em;
  margin-bottom: 1em;
`
const Boton = styled.button `
  position: absolute;
  top: 34em;
  right: 2em;
  background-color: #ffe6a0;
  color: #b48852;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
  border-width: 0px;
  border-style: solid;
  height: 2.3em;
  width: 4em;
  margin-top: 1.5em;
  margin-right: 1em;
  border-radius: 2em;
  font-family: 'YellowCandy';
  font-size: 22px;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 1px 5px rgba(32, 32, 32, 0.5);
    background-color: #b48852;
    color: #dfdfdf;
  };
`
const Creador = styled.h1 `
  position: absolute;
  display: flex;
  top: 50em;
  right: 40em;
  justify-content: center;
  color: #8b5f2b;
  font-family: 'YellowCandy';
  font-size: 1em;
`
const Descripcion = styled.div `
  display: flex;
  color: #ac783a;
  margin-bottom: 1em;
  margin-left: 2em;
  margin-right: 2em;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 2.5em;
`
const Imagen = styled.img `
  width: 20em;
  height: 20em;
  border-radius: 20em;
  border-style: solid;
  border-width: 1em;
  border-color: #f7efe6;
  box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
`

const Landing = () => {
    return (
      <Pagina>
        <Cartita>
        <Titulo>
          <Texto>Where's my dogo?</Texto>
        </Titulo>
        <Descripcion>Encontrá la raza que buscás, información detallada de la raza que más te guste!</Descripcion>
        <Imagen src="/images/perro.jpg" alt="imagen de perro"/>       
        <Link to= {'/Home'}>
          <Boton>Log In</Boton>
        </Link>
        <Creador>Mateo Cornetti</Creador>     
      </Cartita>
      </Pagina>
    )
  }

export default Landing;