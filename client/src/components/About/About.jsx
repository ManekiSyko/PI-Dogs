import styled from "styled-components";

const Cartita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 47em;
  box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
  background-color: #ffe6a0;
  border-bottom-right-radius: 3em;
  border-bottom-left-radius: 3em;
  border-style: solid;
  border-width: 4px;
  border-top-width: 0px;
  border-color: #ffd780;
  margin-left: 13em;
  margin-right: 13em;
`;
const Titulo = styled.div`
  margin-top: 50px;
  font-family: "YellowCandy";
  font-size: 8em;
  color: #8b5f2b;
`
const Descripcion = styled.div` 
  margin-top: 50px;
  width: 10em;
  font-family: "YellowCandy";
  font-size: 3em;
  color: #b48852;
`
const About = () => {
return (
  <Cartita>
    <Titulo>Where's my Dogo?</Titulo>
    <Descripcion>
        App desarrollada por Mateo Cornetti
        a modo de proyecto individual para
        el curso de FullStack de soyHenry,
        usando la API TheDogAPI
    </Descripcion>
    <Descripcion>
        v0.1   10/2023
    </Descripcion>
  </Cartita>
  );
};

export default About;