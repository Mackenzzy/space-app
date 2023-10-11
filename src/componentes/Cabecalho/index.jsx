import { styled } from "styled-components";
import CampodeTexto from "../CampodeTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`;

const Cabecalho  = ()=>{
    return (
        <HeaderEstilizado>
            <img src="public/imagens/Logo.png" alt="Logo" />
            <CampodeTexto/>

        </HeaderEstilizado>
    )
}
export default Cabecalho