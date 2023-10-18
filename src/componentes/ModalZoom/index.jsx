import Imagem from '../Galeria/imagem'
import styled from 'styled-components'

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`
const DialogEstilizado = styled.dialog`
    position: absolite;
    top: 294px;
`

const ModalZoom = ({foto}) => {

    return (
        <>
            {foto && <>
            <Overlay/>
                <DialogEstilizado open = {!!foto}>
                <Imagem
                    foto={foto}
                    expandida = {true}
                />

                <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </DialogEstilizado>
            </>}

        </>
    )
}

export default ModalZoom