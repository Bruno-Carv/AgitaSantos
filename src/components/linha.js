import React from 'react';
import Styled from 'styled-components/native';

export const DivLinha = Styled.View`
  border-top-width: 2px;
  border-top-color: #ccd0d5;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const LinhaText = Styled.Text`
  color: #ccd0d5;
  font-size: 14px;
  top: -10px;
  background: #E4EEFA;
  padding-left: 20px;
  padding-right: 20px;
`;

export default function Linha(){
    return(
        <DivLinha>
            <LinhaText> OU </LinhaText>
        </DivLinha>
    );
}