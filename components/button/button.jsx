import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fontFamilies, typeScale } from 'utils/typography';

const applyPrimaryButtonSizeStyles = ({ color = 'small' }) => {
  switch (color) {
    case 'small': {
      return css`
        font-size: ${typeScale.get('paragraph')};
        height: 3rem;
        padding: 0 1.5rem;
      `;
    }
    case 'large': {
      return css`
        font-size: ${typeScale.get('header2')};
        height: 6rem;
        padding: 0 3rem;
      `;
    }
    default: {
      throw new Error('Unknown button size');
    }
  }
};

const Button = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${fontFamilies.get('body')};
  font-weight: 400;
  justify-content: center;
  line-height: 1;
  transition: background-color 200ms, border-color 200ms, color 200ms;
`;

export const PrimaryButton = styled(Button)`
  background-color: #ccc;
  border: 0.2rem solid #000;
  color: #000;

  ${applyPrimaryButtonSizeStyles}

  &:hover {
    background-color: purple;
    color: white;
    border-color: red;
  }

  &:focus {
    background-color: orange;
    border-color: red;
    color: white;
  }

  &:active {
    background-color: black;
    border-color: black;
    color: black;
  }

  &[disabled] {
    background-color: grey;
    border-color: grey;
    color: grey;
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  color: #000;
  display: inline-flex;
  font-size: ${typeScale.get('paragraph')};
  text-decoration: none;

  &::before {
    content: '>';
    display: inline-block;
    font-weight: 700;
    margin-right: 0.5rem;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`.withComponent('a');
