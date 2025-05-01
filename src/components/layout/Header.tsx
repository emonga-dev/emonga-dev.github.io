import '../../style/css/Header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuButton from '../MenuButton.tsx';

const Header = () => {
  const [ isHeaderVisible, setIsHeaderVisible ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenuOpen = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={ `header${isHeaderVisible ? '' : ' hide'}` }>
      <div className="inner">
        <Link to="/" onClick={ () => closeMenu() } className="logo">애몽가</Link>
        <nav className={ `nav${isMenuOpen ? ' open' : ''}` }>
          <Link to="/about" onClick={ () => closeMenu() }>ABOUT</Link>
          <Link to="/projects" onClick={ () => closeMenu() }>PROJECTS</Link>
          <Link to="/contact" onClick={ () => closeMenu() }>CONTACT</Link>
        </nav>
        <MenuButton onClick={ toggleMenuOpen } />
      </div>
    </header>
  );
};

export default Header;
