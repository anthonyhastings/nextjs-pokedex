import React from 'react';
import styled from '@emotion/styled';

const AspectRatioWrapper = styled.div`
  aspect-ratio: ${({ ratio }) => ratio};
  font-size: 0;
  position: relative;

  > * {
    bottom: 0;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

const AspectRatioImage = ({ children, ...rest }) => {
  return (
    <AspectRatioWrapper {...rest}>
      {React.Children.only(children)}
    </AspectRatioWrapper>
  );
};

export default AspectRatioImage;
