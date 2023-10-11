import styled from "styled-components"

const ItemListaEstilizada = styled.li`

`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) =>{
    return(<ItemListaEstilizada>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone"/>
        {children}
        </ItemListaEstilizada>
    )
}

export default ItemNavegacao