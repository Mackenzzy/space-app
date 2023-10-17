import styled from "styled-components"
const Container = styled.div`
  /* Estilos para todas as telas */
  width: 100%;

  @media (min-width: 768px) {
    /* Estilos para telas a partir de 768px */
    width: 80%;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
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
    padding: 0 10px;
    `

const Titulo = styled.h3`
    color: #fff;
    font-size: 20px;
    font-family: 'GandhiSansBold';
`

const Rodape = styled.footer`
    font-family: 'GandhiSansRegular';
    display: flex;
    justify-content: space-between;
    align-items: center;


`
const BotoesDiv = styled.div`
    display: flex;
    gap: 10px;

`
const Botao = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
`



const Imagem = ({foto}) => {

    return (
        <Galeria>
            <Figure>
                <ImagemEstilizada src={foto.path} alt={foto.titulo}/>
               
                <Rodape>
                    <TextoDiv>
                        <Titulo>{foto.titulo}</Titulo>
                        <p>{foto.fonte}</p>
                    </TextoDiv>
                    
                    <BotoesDiv>
                        <Botao><img src="./icones/favorito.png" alt="" /></Botao>
                        <Botao><img src="./icones/expandir.png" alt="" /></Botao>
                    </BotoesDiv>
                </Rodape>
            </Figure>
        </Galeria>
    )
}
export default Imagem