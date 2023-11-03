import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cards from '../Cards/Cards';
import { getAllBreeds, setCurrentPage } from '../../redux/actions';

const Pagina = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
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
const Botonera = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
`
const Boton = styled.button`
  background-color: #ffe6a0;
  color: #b48852;
  box-shadow: -5px 5px 15px rgba(32, 32, 32, 0.5);
  border-width: 0px;
  border-style: solid;
  height: 35px;
  width: 90px;
  margin-right: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'YellowCandy';
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c7985e;
    color: #dfdfdf;
  };
`
const Separador = styled.div`
  width: 30em;
`

const Home = ({ allCards, currentPage, cardsPerPage, getAllBreeds, setCurrentPage }) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      getAllBreeds();
      setDataLoaded(true);
    }
  }, [getAllBreeds, dataLoaded]);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  // Calcula el índice de inicio y fin de las tarjetas en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const goToFirstPage = () => {
    handlePageChange(1);
  };

  const goToLastPage = () => {
    handlePageChange(totalPages);
  };

  return (
    <Pagina>
      <Cartita>
        <Cards cards={currentCards} />
      </Cartita>
      <Botonera>
        <Boton
          onClick={goToFirstPage}
          disabled={currentPage === 1}>Inicio
        </Boton>
        <Separador/>
        <Boton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>Anterior
        </Boton>
        <Boton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentCards.length < cardsPerPage}>Siguiente
        </Boton>
        <Separador/>
        <Boton
          onClick={goToLastPage}
          disabled={currentCards.length < cardsPerPage}>Fin
        </Boton>
      </Botonera>
    </Pagina>
  );
};

const mapStateToProps = (state) => ({
  allCards: state.allCards,
  currentPage: state.currentPage,
  cardsPerPage: state.cardsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBreeds: () => {
    dispatch(getAllBreeds());
  },
  setCurrentPage: (newPage) => {
    dispatch(setCurrentPage(newPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);