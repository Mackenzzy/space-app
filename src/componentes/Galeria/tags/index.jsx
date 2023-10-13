import tags from './tags.json'
import styled from 'styled-components'

const BotaoTag = styled.button``

const Tags = () => {
    return <>

        <p>Busque por tags:</p>
        {tags.map((tag) => (
            <button key={tag.id}>{tag.titulo}</button>
        ))}

    </>
}
export default Tags