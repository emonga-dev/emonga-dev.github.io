import '../../style/css/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" className="logo">애몽가</Link>
        <nav className="nav">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
