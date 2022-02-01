import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import useLocalStorage from 'utils/hooks/use-local-storage';
import { neutralColors, primaryColors, secondaryColors } from 'utils/colors';
import { primaryTheme, alternateTheme } from 'utils/themes';
import { fontFamilies, typeScale } from 'utils/typography';
import AspectRatioImage from 'components/aspect-ratio-image';
import ThemeSwitcher from 'components/theme-switcher';
import PokeballComponent from 'public/images/logo.svg';
import GlobalStyles from './global-styles';

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
  // NextJS will error if server renders one way, and client initially hydrates in another way.
  // This can happen when useLocalStorage on the server always uses the fallback, but the client
  // potentially hydrates from storage with a different value. To combat this, the mounted flag
  // gets taken into consideration so initial hydration always matches the server. After that,
  // the next render cycle will update the client-side application and real local storage value
  // into consideration.
  const [hasMounted, setHasMounted] = useState(false);

  const [isAlternateTheme, setIsAlternateTheme] = useLocalStorage(
    'isAlternateTheme',
    false
  );

  const onThemeChange = useCallback(() => {
    setIsAlternateTheme((currentTheme) => !currentTheme);
  }, [setIsAlternateTheme]);

  const theme = hasMounted && isAlternateTheme ? alternateTheme : primaryTheme;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <AppHeader>
          <SiteTitle>Pokedex</SiteTitle>
          <LogoWrapper ratio="1 / 1">
            <PokeballComponent />
          </LogoWrapper>
          <ThemeSwitcher
            darkModeEnabled={hasMounted && isAlternateTheme}
            onClick={onThemeChange}
          />
        </AppHeader>
        <Main>{children}</Main>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;
