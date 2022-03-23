import styled from '@emotion/styled';
import { H2 } from '../components/typography';

const PageWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`;

const InternalServerError = () => {
  return (
    <PageWrapper>
      <H2 mb={0}>500 | Error Occurred</H2>
    </PageWrapper>
  );
};

export default InternalServerError;
