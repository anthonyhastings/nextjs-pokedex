import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fontFamilies, typeScale } from 'utils/typography';

const applyPrimaryButtonSizeStyles = ({ size = 'small' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: ${typeScale.get('paragraph')};
        padding: 0.6rem 1.5rem;
      `;
    }
    case 'large': {
      return css`
        font-size: ${typeScale.get('header4')};
        padding: 1.2rem 3rem;
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
  background-color: ${({ theme }) => theme.primaryColor};
  border: 0.35rem solid ${({ theme }) => theme.primaryBorderColor};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.textColorOnPrimary};

  ${applyPrimaryButtonSizeStyles}

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primaryHoverColor};
    border-color: ${({ theme }) => theme.primaryHoverBorderColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryActiveColor};
    border-color: ${({ theme }) => theme.primaryActiveBorderColor};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.disabledColor};
    border-color: ${({ theme }) => theme.disabledBorderColor};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  color: ${({ theme }) => theme.textColor};
  display: inline-flex;
  font-size: ${typeScale.get('paragraph')};
  text-decoration: none;

  &::before {
    content: '🔗';
    display: inline-block;
    margin-right: 0.2rem;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`.withComponent('a');
