import styled from '@emotion/styled';
import { spacing, typeScale } from 'utils/typography';
import paddingSpacing from './padding-spacing';
import marginSpacing from './margin-spacing';

export const Paragraph = styled.p`
  font-size: ${typeScale.get('paragraph')};
  line-height: 1.5;
  margin-bottom: ${spacing.get(2)};
  ${marginSpacing}
  ${paddingSpacing}
`;
