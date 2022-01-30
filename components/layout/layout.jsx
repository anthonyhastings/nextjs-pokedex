import { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { primaryTheme, alternateTheme } from 'utils/themes';
import { neutralColors, primaryColors, secondaryColors } from 'utils/colors';
import { fontFamilies, typeScale } from 'utils/typography';
import AspectRatioImage from 'components/aspect-ratio-image';
import PokeballComponent from 'public/images/logo.svg';

const AppWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`;

const AppHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border-bottom: 1rem solid ${secondaryColors.get(500)};
  display: flex;
  flex-direction: row;
  height: 10rem;
  justify-content: center;
  position: relative;
  transition: background-color 200ms;
`;

const SiteTitle = styled.h1`
  color: ${secondaryColors.get(500)};
  font-family: ${fontFamilies.get('headline')};
  font-size: ${typeScale.get('header1')};
  line-height: 1;
  -webkit-text-stroke: 0.2rem ${primaryColors.get(600)};
`;

const LogoWrapper = styled(AspectRatioImage)`
  bottom: -4.5rem;
  filter: drop-shadow(0.3rem 0.3rem 0.7rem ${neutralColors.get(500)});
  left: 50%;
  max-width: 7rem;
  position: absolute;
  transform: translate(-50%);
  width: 50%;
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.pageBackgroundColor};
  flex: 1 1 auto;
  transition: background-color 200ms;
`;

const Layout = ({ children }) => {
  const [isAlternateTheme] = useState(false);

  return (
    <ThemeProvider theme={isAlternateTheme ? alternateTheme : primaryTheme}>
      <AppWrapper>
        <AppHeader>
          <SiteTitle>Pokedex</SiteTitle>
          <LogoWrapper ratio="1 / 1">
            <PokeballComponent />
          </LogoWrapper>
        </AppHeader>
        <Main>{children}</Main>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;
