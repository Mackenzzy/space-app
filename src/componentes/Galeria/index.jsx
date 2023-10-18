import Titulo from "../Titulo"
import styled from "styled-components"
import Imagem from "./imagem"
import Tags from "./Tags"
import Populares from "./Populares"

const SecaoGaleria = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;

    `
const GaleriaContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70vw;

`
const SecaoFluida = styled.section`
    width:10vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;  
`
const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (

        <>
            <Tags />



            <GaleriaContainer>
                <SecaoFluida>
                <Titulo>
                        Navegue pela galeria
                </Titulo>


                    <SecaoGaleria>

                        {fotos.map((foto =>
                            <Imagem
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                key={foto.id}
                                foto={foto}
                            />))}


                    </SecaoGaleria>
                    
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>


        </>
    )
}

export default Galeria