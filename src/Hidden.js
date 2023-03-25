import styled, { css } from 'styled-components';

export const HiddenSizes = {
  xs: 0,
  sm: 450,
  md: 790,
  lg: 1200,
  xl: 1600
};

export const hiddenMixin = css`
  @media (min-width: ${props => props.above}px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  ${hiddenMixin};
`;

export function Hidden ({ children, above = HiddenSizes.xs }) {
  return (
    <Wrapper above={above}>
      {children}
    </Wrapper>
  );
}

Hidden.displayName = 'Hidden';
