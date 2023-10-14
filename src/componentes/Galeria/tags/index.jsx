import React, { useState } from 'react';
import tags from './tags.json';
import styled from 'styled-components';

const SecaoTags = styled.section`
  display: flex;
  gap: 24px;
  color: #fff;
  font-family: 'GandhiSansRegular';
  font-size: 24px;
  padding: 56px 0px;
`;

const BotaoTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }`

const Tags = () => {
  const [Botao, setBotao] = useState(0);
  const trocarCorBorda = (id) => {
    setBotao(id)
}

  return (
    <SecaoTags>
      <p>Busque por tags:</p>
      {tags.map(tag => 
      <BotaoTag $ativo={tag.id === Botao} key={tag.id} onClick={
        () => trocarCorBorda(tag.id)}>{tag.titulo}
        </BotaoTag>)}
     
    </SecaoTags>
  );
};

export default Tags;
