import '../../style/css/Header.scss';
import { Link } from 'react-router-dom';
import { CSSProperties, useEffect, useState } from 'react';
import MenuButton from '../MenuButton.tsx';
import { useScrollLock } from '../../hooks/useScrollLock.ts';
import { useColorTheme } from '../../contexts/ColorThemeContext.tsx';
import LanguageSelector from '../common/LanguageSelector.tsx';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const { theme } = useColorTheme();
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

  useScrollLock(isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, setIsMenuOpen]);

  const backgroundColor = theme.background;
  const baseColor = theme.base;
  const accentColor1 = theme.accent1;
  const accentColor2 = theme.accent2;

  return (
    <header
      className={ `header${isMenuOpen || isHeaderVisible ? '' : ' hide'}` }
      style={ { backgroundColor, color: baseColor } }
    >
      <div className="inner">
        <Link to="/" onClick={ () => closeMenu() } className="logo" style={ { color: accentColor2 } }>
          <div className="logo-container">
            <img src={ logo } alt="BINDRÜM"/>
          </div>
        </Link>
        <nav
          className={ `nav${isMenuOpen ? ' open' : ''}` }
          style={ { '--accent-color': accentColor1 } as CSSProperties }
        >
          <Link to="/about" onClick={ () => closeMenu() } style={ { color: baseColor } }>ABOUT</Link>
          <Link to="/projects" onClick={ () => closeMenu() } style={ { color: baseColor } }>PROJECTS</Link>
          <Link to="/contact" onClick={ () => closeMenu() } style={ { color: baseColor } }>CONTACT</Link>
        </nav>
        <LanguageSelector />
        <MenuButton onClick={ toggleMenuOpen } />
      </div>
    </header>
  );
};

export default Header;
