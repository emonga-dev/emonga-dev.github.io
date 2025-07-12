import '../../style/css/common/MenuButton.scss';
import { useColorTheme } from '@/contexts/ColorThemeContext.ts';

export interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MenuButton = ({ onClick, isOpen }: MenuButtonProps) => {
  const { theme } =  useColorTheme();

  const backgroundColor = theme.background;
  const foregroundColor = theme.base;

  return (
    <button
      onClick={ onClick }
      className={ `menu-button${isOpen ? ' open' : ''}` } style={ { backgroundColor } }
    >
      <span className="bar" style={ { backgroundColor: foregroundColor } } />
      <span className="bar" style={ { backgroundColor: foregroundColor } } />
      <span className="bar" style={ { backgroundColor: foregroundColor } } />
    </button>
  );
};

export default MenuButton;
