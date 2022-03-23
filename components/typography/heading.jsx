import styled from '@emotion/styled';
import { spacing, typeScale } from 'utils/typography';
import paddingSpacing from './padding-spacing';
import marginSpacing from './margin-spacing';

export const H1 = styled.h1`
  font-size: ${typeScale.get('header1')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(3)};
  ${marginSpacing}
  ${paddingSpacing}
`;

export const H2 = styled.h2`
  font-size: ${typeScale.get('header2')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(3)};
  ${marginSpacing}
  ${paddingSpacing}
`;

export const H3 = styled.h3`
  font-size: ${typeScale.get('header3')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(2)};
  ${marginSpacing}
  ${paddingSpacing}
`;

export const H4 = styled.h4`
  font-size: ${typeScale.get('header4')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(2)};
  ${marginSpacing}
  ${paddingSpacing}
`;

export const H5 = styled.h5`
  font-size: ${typeScale.get('header5')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(1)};
  ${marginSpacing}
  ${paddingSpacing}
`;

export const H6 = styled.h6`
  font-size: ${typeScale.get('header6')};
  line-height: 1.35;
  margin-bottom: ${spacing.get(1)};
  ${marginSpacing}
  ${paddingSpacing}
`;
