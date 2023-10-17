import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"
import Imagem from "./imagem"


const GaleriaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const SecaoFluida = styled.section`
  
    flex-grow: 1;
`
const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>
            <Tags />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela galeria
                    </Titulo>

                    {fotos.map((foto =>
                        <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id}
                            foto={foto}
                        />))}


                </SecaoFluida>
                <Populares />
            </GaleriaContainer>


        </>
    )
}

export default Galeria