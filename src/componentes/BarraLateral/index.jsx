import styled from "styled-components";

const BarraLateralEstilizado = styled.div`

`
const listaEstilizada = styled.ul`
    
`

const BarraLateral = () => {
   return(
   <aside>
        <nav>
            <listaEstilizada>
                <li>Início</li>
                <li>Mais Vistas</li>
                <li>Mais Curtidas</li>
                <li>Novas</li>
                <li>Surpreenda-me</li>
            </listaEstilizada>
        </nav>
    </aside>
    )
};

export default BarraLateral;