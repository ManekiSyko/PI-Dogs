import styled from "styled-components";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";

const Pagina = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
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

const Search = ({ results }) => {
    console.log({results})
  
    if (!results) {
      return <Loading/>;
    }
    return (
      <Pagina>
        <Cartita>
          <Cards dogs={results} />
        </Cartita>
      </Pagina>
    );
  };

  export default Search;