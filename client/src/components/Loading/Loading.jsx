import styled from "styled-components";

const Cartita = styled.div`
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
const Carga = styled.div`
  padding-top: 2em;
  height: 5em;
  font-family: "YellowCandy";
  font-size: 8em;
  color: #b48852;
`
const Loading = () => {
return (
  <Cartita>
    <Carga>Loading puppies...</Carga>
  </Cartita>
  );
};

export default Loading;