import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cartita = styled.div`
    display: flex;
    margin-top: 0em;
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
`

const DivA = styled.div `
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 2em;
    margin-bottom: 1em;
`
const Img = styled.img `
    border-width: 1em;
    border-style: solid;
    border-color: #f7efe6;
    box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
    border-radius: 3em;
    display: flex;
    justify-content: space-evenly;
    max-width: 40em;
    max-height: 40em;
`

const DivB = styled.div `
    display: flex;
    flex-direction: column;
    font-family: 'YellowCandy';
    margin: 2em;
    margin-left: 4em;
`
const Title = styled.div `
    font-family: 'YellowCandy';
    color: #6b4619;
    font-size: 6em;
    max-width: 8em;
`
const Temp = styled.div `
    font-family: 'YellowCandy';
    color: #a1753e;
    padding-top: 1em;
    font-size: 2.5em;
`
const Content = styled.div `
    align-items: center;
    padding-top: 5em;
`
const Text = styled.div `
    color: #b48852;
    font-size: 2em;
    padding-top: 10px;
`



export const Detail = () => {
  const { id } = useParams()
  const [dogDetail, setDogDetail] = useState({})


  useEffect(()=> {
    axios(`http://localhost:3001/dogs/id/${id}`).then(({data}) => {
      if(data.length > 0) {
        const dogData = data[0]
        setDogDetail(dogData);
      } else {
        window.alert('No hay razas con ese ID')
      }
    })
    return setDogDetail({})
  }, [id])
  return (
    <Cartita>
        <DivA>
            <Img src={dogDetail.image}/>
        </DivA>
        <DivB>
            <Title>{dogDetail.name}</Title>
            <Temp>{dogDetail.temperament}</Temp>
        <Content>
            <Text>Weight: {dogDetail.weight} kg</Text>
            <Text>Height: {dogDetail.height}</Text>
            <Text>Life span: {dogDetail.life_span}</Text>
        </Content>  
        </DivB>
    </Cartita>

  )
}

export default Detail;
