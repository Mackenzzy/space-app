import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '390px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    & > img {
        max-width: 100%;
        
        &:hover {
            transform: scale(1.1);
            transition: transform 1s ease;
        }
    }
    figcaption {
        background-color: #001634;
        color: white;
        box-sizing: border-box;
        padding: 16px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin:0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    // const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'
    let iconeFavorito = '/icones/favorito.png';
    if (foto.favorita) {
        iconeFavorito = '/icones/favorito-ativo.png'
    }


    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                    <img src={iconeFavorito} alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem