
import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Galeria = styled.section`
    flex-wrap: wrap;
    padding: 10px;
    
`

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width:350px;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
  
    & > img {
        max-width: 100%;
        &:hover{
        transform: scale(1.1);
        transition: all 1.0s;
        
        
    }
    }
    figcaption {
        font-family: 'GandhiSansRegular';
        gap: 8px;
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 24px 16px;
        
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 16px;
        }
        h4 {
            font-family: 'GandhiSansRegular';
            font-size: 12px;
            flex-grow: 1;
            
        }
        h3, h4 {
            margin: 0;            
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const iconeFavorita = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

    return (
        <Galeria>
            <Figure $expandida={expandida} id={`foto-${foto.id}`}>
                <img src={foto.path} alt={foto.alt} />
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <Rodape>
                        <h4>{foto.fonte}</h4>
                        <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorita} alt="Icone de favorito" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>}
                    </Rodape>
                </figcaption>
            </Figure>
        </Galeria>)
}

export default Imagem