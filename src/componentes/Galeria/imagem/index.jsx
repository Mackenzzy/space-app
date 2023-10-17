/*
import styled from "styled-components"
const Container = styled.div`

  width: 100%;

  @media (min-width: 768px) {

    width: 80%;
  }

  @media (min-width: 1200px) {

    width: 60%;
  }
`;


const Galeria = styled.section`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap; 
    `

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    width: ${(props) => (props.$expandida ? '90%' : '460px')};

    max-width: 400px;
    background-color: #001634;
    box-shadow: 0px 4px 4px 0px #00000026;
    overflow: hidden;
    color: #fff;

`
const ImagemEstilizada = styled.img`    
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        transform: scale(1.1);
        transition: all 1.0s;
    }

`

const TextoDiv = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 20px;
    `

const Titulo = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: 'GandhiSansBold';
    border: none;
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

`
const Texto = styled.p`
    color: #fff;
    font-size: 16px;
    font-family: 'GandhiSansRegular';`

const BotoesDiv = styled.div`
    display: flex;
    gap: 10px;

`
const BotaoIcone = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
`



const Imagem = ({foto, expandida = false, aoZoomSolicitado}) => {

    return (
            <Figure $expandida={expandida} id={`foto-${foto.id}`}>
                <ImagemEstilizada src={foto.path} alt={foto.titulo}/>
                <figcaption>
                    <Titulo>{foto.titulo}</Titulo>
                    <Rodape>                 
                            <Texto>{foto.fonte}</Texto> 
                        
                            <BotaoIcone><img src="./icones/favorito.png" alt="" /></BotaoIcone>
                            <BotaoIcone>
                            
                                <img src="/icones/expandir.png" alt="Icone de expandir" />
                            </BotaoIcone>
                    </Rodape>
                </figcaption>
            </Figure>
    )
}
export default Imagem
*/ 

import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Galeria = styled.section`
    display: inline-flex;
    padding: 10px
    
`

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        &:hover{
        transform: scale(1.1);
        transition: all 1.0s;
    }
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false }) => {
    return (
    <Galeria>
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone>
                    <img src="/icones/favorito.png" alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>
    </Galeria>)
}

export default Imagem