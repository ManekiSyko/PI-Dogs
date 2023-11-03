import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { filterBreeds, orderBreeds, searchBreeds } from "../../redux/actions"
import { connect } from "react-redux"

const Fondo = styled.div `
   display: flex;
   justify-content: space-between;
   background-color: #ffd768;
   height: 8em;
   box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
   border-style: solid;
   border-width: 4px;
   border-color: #ffd780;
   border-top-width: 0px;
   border-bottom-width: 0px;
   padding-top: 0em;
   padding-right: 0.5em;
   padding-bottom: 1em;
   margin-left: 13em;
   margin-right: 13em;
`
const Cabecera = styled.div `
   justify-content: start;
   padding-top: 1em;
`
const BotonTitulo = styled.button `
   background-color: transparent;
   border-width: 0em;
   color: #6b4619;
   height: 2em;
   width: 5em;
   margin-left: 10px;
   font-size: 3em;
   font-family: 'YellowCandy';
   cursor: pointer;
`
const Botonera = styled.div `
   align-items: center;
   left: 60%;
`
const Botones = styled.button `
   background-color: #ffe6a0;
   color: #b48852;
   box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
   border-width: 0px;
   border-style: solid;
   height: 50px;
   width: 4em;
   margin-top: 45px;
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
const Texto = styled.div `
   font-family: 'YellowCandy';
   color: #b48852;
   font-family: 'YellowCandy';
   font-size: 22px;
`
const Filtros = styled.div `
   display: flex;
   flex-direction: column;
   margin-top: 5px;
   align-items: center;
`
const FiltrosB = styled.div `
   display: flex;
   margin-top: 5px;
   justify-content: center;
   align-items: center;
`
const Botones2 = styled.button `
   background-color: #ffe6a0;
   color: #b48852;
   box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
   border-width: 0px;
   border-style: solid;
   height: 25px;
   width: 70px;
   margin: 5px;
   border-radius: 2em;
   font-family: 'YellowCandy';
   font-size: 14px;
   cursor: pointer;
   &:hover {
      box-shadow: -1px 1px 5px rgba(32, 32, 32, 0.5);
      background-color: #b48852;
      color: #dfdfdf;
   };
`
const Busqueda = styled.input `
   font-size: 22px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   height: 50px;
   width: 300px;   
   margin: 5px;
   margin-top: 15px;
   border-radius: 2em;
   border-width: 0em;
   padding-right: 2em;
   padding-left: 2em;
   box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
`
const Buscador = styled.div `
   display: flex;
`
function Nav({ filterBreeds, orderBreeds, temperaments, searchBreeds }) {
   // const [filteredTemps, setFilteredTemps] = useState([]);
   const [filter, setFilter] = useState("");
   const [search, setSearch] = useState("");

   useEffect(() => {   
      if (search) searchBreeds(search);
   }, [search, setSearch, filter, setFilter, temperaments, searchBreeds]);

   const handleChange = (event) => {
      switch (event.target.id) {
         case "inputSearch":
            setSearch(event.target.value);
            if(event.target.value === "") filterBreeds("allB");
            break;
         default:
            break;
      }
   };

   const onFilter = (event) => {
      filterBreeds(event.target.id);
   };
   const onSort = (event) => {
      orderBreeds(event.target.id);
   };

   return (
      <nav>
         <Fondo>
            <Cabecera>
            <Link to={'/Home'}><BotonTitulo>Where's My Dogo?</BotonTitulo></Link>
            </Cabecera>
            <Botonera>
               <Filtros>
                  <Texto>Sort breed by</Texto>
                  <Filtros>
                     <FiltrosB>
                     <Botones2 id="nameasc" onClick={onSort}>Name ↑↑</Botones2>
                     <Botones2 id="namedes" onClick={onSort}>Name ↓↓</Botones2> 
                     </FiltrosB>
                     <FiltrosB>
                     <Botones2 id="weightasc" onClick={onSort}>Weight ↑↑</Botones2>                    
                     <Botones2 id="weightdes" onClick={onSort}>Weight ↓↓</Botones2>
                     </FiltrosB>                
                  </Filtros>
               </Filtros>
               </Botonera>
               <Botonera>
               <Filtros>
                  <Texto>Filter Breeds</Texto>
                  <Filtros>
                     <FiltrosB>
                     <Botones2 id="created" onClick={onFilter}>Created</Botones2>                    
                     <Botones2 id="api" onClick={onFilter}>API</Botones2>
                     </FiltrosB> 
                     <FiltrosB>
                     <Botones2 id="allB" onClick={onFilter}>All</Botones2>  
                     </FiltrosB>              
                  </Filtros>
               </Filtros>
               </Botonera>
               <Botonera>
               <Buscador>
               <Filtros>
                  <Texto>Search breeds</Texto>
                        <Busqueda 
                        type="text"
                        placeholder="..."
                        value={search || ""}
                        id="inputSearch"
                        autoComplete="off"
                        onChange={handleChange} />
               </Filtros>
               </Buscador>
               </Botonera> 
            <Botonera>
              <Link to={'/Form'}><Botones>New</Botones></Link>
              <Link to={'/About'}><Botones>About</Botones></Link>
            </Botonera>
         </Fondo>
      </nav>
   );
}

const mapStateToProps = (state) => {
   return {
     temperaments: state.temperaments,
   };
 };
 const mapDispatchToProps = (dispatch) => {
   return {
     filterBreeds: (status) => {
       dispatch(filterBreeds(status));
     },
     orderBreeds: (order) => {
       dispatch(orderBreeds(order));
     },
     searchBreeds: (breed) => {
       dispatch(searchBreeds(breed));
     },
   };
 };
 

export default connect(mapStateToProps, mapDispatchToProps)(Nav);