import styled from "styled-components";

const Fundo = styled.div`
    background-color: #04244F;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 0 40px;
    p{
        font-family: 'GandhiSansBold';
        font-size: 18px;
        margin: 0;
        padding: 0;

    }
`
const IconeDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    `
const Icone = styled.img`
    width: 24px;
    height: 24px;

`

const Footer = () => {
    return (
        <Fundo>
                <IconeDiv>
                    <Icone src="/icones/facebook.png" alt="" />
                    <Icone src="/icones/twitter.png" alt="" />
                    <Icone src="/icones/instagram.png" alt="" />
                </IconeDiv>
            <p>Desenvolvido por @mackenzzy</p>
        </Fundo>
    )
}
export default Footer