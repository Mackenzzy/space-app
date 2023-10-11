import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const BarraLateralEstilizado = styled.div`

`
const listaEstilizada = styled.ul`
    
`
const ItemEstilizado = styled.li`
`
const BarraLateral = () => {
   return(
   <aside>
        <nav>
            <listaEstilizada>
                <ItemNavegacao
                    iconeAtivo="./icones/home-ativo.png"
                    iconeInativo="./icones/Home-inativo.png"
                    ativo={true}
                />
                <ItemNavegacao
                    iconeAtivo="./icones/mais-vistas-ativo.png"
                    iconeInativo="./icones/mais-vistas-inativo.png"
                    ativo={false}
                />
                <ItemNavegacao
                    iconeAtivo="./icones/mais-curtidas-ativo.png"
                    iconeInativo="./icones/mais-curtidas-inativo.png"
                    ativo={false}
                />
                <ItemNavegacao
                    iconeAtivo="./icones/novas-ativo.png"
                    iconeInativo="./icones/novas-inativo.png"
                    ativo={false}
                />
                <ItemNavegacao
                    iconeAtivo="./icones/surpreenda-me-ativo.png"
                    iconeInativo="./icones/surpreenda-me-inativo.png"
                    ativo={false}
                />
            </listaEstilizada>
        </nav>
    </aside>
    )
};

export default BarraLateral;