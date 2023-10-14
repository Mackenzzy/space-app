
const imagem = ({foto}) => {
    return (
        <figure>
            <img src={foto.imagem} alt={foto.titulo}/>
            <figcaption>{foto.titulo}</figcaption>
            <footer>
                <p>{foto.descricao}</p>
                <p>{foto.autor}</p>
                <button>Favorito</button>
                <button>Expandir</button>
            </footer>
        </figure>
    )
}
export default imagem