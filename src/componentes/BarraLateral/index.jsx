import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";


const ListaEstilizada = styled.ul`
    text-decoration: none;
    list-style-type: none;
`;


const BarraLateral = () => {
    
   return(
   <aside>
        <nav>
            <ListaEstilizada>
                <ItemNavegacao
                    iconeAtivo="./icones/home-ativo.png"
                    iconeInativo="./icones/Home-inativo.png"
                    ativo={true}
                    >
                        Inicio
                </ItemNavegacao>
                
                <ItemNavegacao
                    iconeAtivo="./icones/mais-vistas-ativo.png"
                    iconeInativo="./icones/mais-vistas-inativo.png"
                    ativo={false}
                    >
                        Mais Vistas
                </ItemNavegacao>
                <ItemNavegacao
                    iconeAtivo="./icones/mais-curtidas-ativo.png"
                    iconeInativo="./icones/mais-curtidas-inativo.png"
                    ativo={false}
                    >
                        Mais Curtidas
                </ItemNavegacao>
                <ItemNavegacao
                    iconeAtivo="./icones/novas-ativo.png"
                    iconeInativo="./icones/novas-inativo.png"
                    ativo={false}
                    >
                        Novas
                </ItemNavegacao>
                <ItemNavegacao
                    iconeAtivo="./icones/surpreenda-me-ativo.png"
                    iconeInativo="./icones/surpreenda-me-inativo.png"
                    ativo={false}
                    >
                        Surpreenda-me
                </ItemNavegacao>
            </ListaEstilizada>
        </nav>
    </aside>
    )
};

export default BarraLateral;