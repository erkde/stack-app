import React from 'react';
import styled, { css } from 'styled-components';

import { Hidden, hiddenMixin } from './Hidden';

const StackChild = styled.div`
  padding-block: 12px;
  width: 100%;

  &:empty {
    display: none;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  ${props => props.above && css`
    ${hiddenMixin};
  `}
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 48px;

  > ${StackChild} + ${StackChild} {
    border-top: 1px solid green;
  }
`;

export function Stack({ children }) {
  return (
    <StackContainer>
      {React.Children.toArray(children).map((child, index) => {
        return (
          <StackChild key={index} above={child.type.displayName === Hidden.displayName ? child.props.above : undefined}>
            {child}
          </StackChild>
        )
      })}
    </StackContainer>    
  );
}
