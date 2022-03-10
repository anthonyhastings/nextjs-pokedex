import styled from '@emotion/styled';
import AspectRatioImage from 'components/aspect-ratio-image';
import DarkModeIcon from 'public/images/icons/dark-mode.svg';
import LightModeIcon from 'public/images/icons/light-mode.svg';
import { primaryColors, secondaryColors } from 'utils/colors';

const ControlWrapper = styled.button`
  background-color: ${primaryColors.get(600)};
  border-radius: 50%;
  border: 0.3rem solid ${primaryColors.get(600)};
  color: ${secondaryColors.get(500)};
  cursor: pointer;
  padding: 0.3rem;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 200ms, border-color 200ms;

  &:hover {
    background-color: ${primaryColors.get(400)};
    border-color: ${primaryColors.get(400)};
  }
`;

const IconWrapper = styled(AspectRatioImage)`
  width: 2.4rem;
`;

const ThemeSwitcher = ({ darkModeEnabled, onClick }) => {
  return (
    <ControlWrapper aria-label="Change theme of the app" onClick={onClick}>
      <IconWrapper ratio="1 / 1">
        {darkModeEnabled ? <DarkModeIcon /> : <LightModeIcon />}
      </IconWrapper>
    </ControlWrapper>
  );
};

export default ThemeSwitcher;
