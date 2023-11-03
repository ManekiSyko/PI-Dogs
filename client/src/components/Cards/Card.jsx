import styled from "styled-components"
import { Link } from "react-router-dom";

const Carta = styled.div `
   background-color: transparent;
   color: #583a18;
   font-size: 0.7em;
   border-radius: 1em;
   border-style: solid;
   border-width: 0px;
   height: 27em;
   width: 25em;
   margin: 2em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   transition: 0.3s ease;
   &:hover {
      transform: scale(1.1);
   }
`;

const ImgContainer = styled.div`
  border-radius: 40em;
  border-width: 1em;
  border-style: solid;
  border-color: #f7efe6;
  box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
  width: 20em;
  height: 20em;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1);
  }

  &:hover {
    img {
      filter: brightness(0.3);
    }
  }
`;
const ImgYNom = styled.div`
   position: relative;
   text-align: center;
   cursor: pointer;

   h2 {
   color: #8b5f2b;
   font-size: 28px;
   font-family: 'YellowCandy';
   margin-right: 2em;
   margin-left: 1em;
   margin-top: 10px;
   border-width: 0px;
   background-color: transparent;
   }
   &:hover {
      h2 {
         background-color: #da9848;
         border-radius: 10px;
         color: #f7efe6;
      }
      .overlay {
         display: block;
      }
      ${ImgContainer} img {
        filter: brightness(0.3);
      }
   }
   .overlay {
      display: none;
      position: absolute;
      top: 40%;
      left: 45%;
      transform: translate(-50%, -50%);  
      width: 10em;
      color: #f7efe6;
      font-size: 18px;
      font-family: 'YellowCandy';
      text-align: center;
   }
`

function Card({name, id, image, temperament, weight}) {

   const maxCaracteres = 30;
   const textoTruncado = name.length > maxCaracteres ? name.slice(0, maxCaracteres) + '...' : name;

   return (
      <div className={styled.container}> 
      <Link to={`/Detail/${id}`} style={{ textDecoration: 'none' }}>
      <Carta>
         <ImgYNom>
            <ImgContainer>
              <img src={image}/>
            </ImgContainer>
            <h2>{textoTruncado}</h2>
            <div className="overlay">
              <p>{weight} kg</p>
              <p>{temperament}</p>
            </div>
         </ImgYNom>        
      </Carta>
      </Link>  
      </div>

   );
}

export default Card;