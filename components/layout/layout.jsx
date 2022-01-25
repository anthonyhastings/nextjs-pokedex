import styled from '@emotion/styled';
import Image from 'next/image';
import { fontFamilies, typeScale } from 'utils/typography';
import pokeball from 'public/images/logo.svg';

const AppWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`;

const AppHeader = styled.header`
  align-items: center;
  background-color: #3c5aa6;
  border-bottom: 1rem solid #ffcb05;
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: center;
  position: relative;
`;

const SiteTitle = styled.h1`
  color: #ffcb05;
  font-family: ${fontFamilies.get('headline')};
  font-size: ${typeScale.get('header1')};
  line-height: 1;
  -webkit-text-stroke: 0.2rem #243970;
`;

const LogoWrapper = styled.div`
  bottom: -4.5rem;
  filter: drop-shadow(0.3rem 0.3rem 0.7rem #000);
  left: 50%;
  max-width: 7rem;
  position: absolute;
  transform: translate(-50%);
  width: 50%;
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

const Layout = ({ children }) => {
  return (
    <AppWrapper>
      <AppHeader>
        <SiteTitle>Pokedex</SiteTitle>
        <LogoWrapper>
          <Image src={pokeball} alt="Pokeball" unoptimized={true} />
        </LogoWrapper>
      </AppHeader>
      <Main>{children}</Main>
    </AppWrapper>
  );
};

export default Layout;
