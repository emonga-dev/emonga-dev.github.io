import '../../style/css/MenuButton.scss';

export interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button onClick={ onClick } className="menu-button">
      안뇽
    </button>
  );
};

export default MenuButton;
