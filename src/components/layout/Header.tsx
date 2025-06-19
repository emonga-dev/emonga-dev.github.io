import '../../style/css/common/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { CSSProperties, useEffect, useState } from 'react';
import MenuButton from './MenuButton.tsx';
import { useScrollLock } from '../../hooks/useScrollLock.ts';
import { useColorTheme } from '../../contexts/ColorThemeContext.tsx';
import Logo from '../../assets/images/logo.svg?react';

const Header = () => {
  const { theme } = useColorTheme();
  const location = useLocation();
  const [ isHeaderVisible, setIsHeaderVisible ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const currentLocation = location.pathname.split('/')[1];

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
            <Logo style={ { color: accentColor2, transition: 'all .3s ease' } }/>
          </div>
        </Link>
        <nav
          className={ `nav${isMenuOpen ? ' open' : ''}` }
          style={ { '--accent-color': accentColor1, '--base-color': baseColor } as CSSProperties }
        >
          <Link
            to="/about" onClick={ () => closeMenu() }
            className={ currentLocation === 'about' ? 'current' : '' }
          >ABOUT</Link>
          <Link
            to="/projects" onClick={ () => closeMenu() }
            className={ currentLocation === 'projects' ? 'current' : '' }
          >PROJECTS</Link>
          <Link
            to="/contact" onClick={ () => closeMenu() }
            className={ currentLocation === 'contact' ? 'current' : '' }
          >CONTACT</Link>
        </nav>
        <MenuButton onClick={ toggleMenuOpen } isOpen={ isMenuOpen } />
      </div>
    </header>
  );
};

export default Header;
