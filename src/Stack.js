import React from 'react';
import styled, { css } from 'styled-components';

import { Hidden, hiddenMixin } from './Hidden';

const StackChild = styled.div`
  display: flex;
  ${props => props.alignX && css`
    justify-content: ${props.alignX};
  `}
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

  > ${StackChild}:not(:empty) ~ ${StackChild}:not(:empty) {
    border-top: 1px solid green;
  }
`;

export const Justify = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
}

export function Stack({ alignX, children }) {
  return (
    <StackContainer>
      {React.Children.toArray(children).map((child, index) => (
        <StackChild 
          key={index} 
          above={child.type.displayName === Hidden.displayName ? child.props.above : undefined} 
          alignX={alignX}
        >
          {child}
        </StackChild>
      )
    )}
    </StackContainer>    
  );
}
