import './style/css/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Header from './components/layout/Header.tsx';
import Main from './components/layout/Main.tsx';
import { ColorThemeProvider, useColorTheme } from './contexts/ColorThemeContext.tsx';
import AboutPage from './pages/AboutPage.tsx';
import { useEffect } from 'react';
import ProjectPage from './pages/DetailPage.tsx';

function App() {
  const { theme } = useColorTheme();

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.backgroundColor = theme.background;
    }
  }, [theme.background]);

  return (
    <ColorThemeProvider>
      <HashRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={ <MainPage /> }></Route>
            <Route path="/about" element={ <AboutPage /> }></Route>
            <Route path="/projects" element={ <ProjectPage /> }></Route>
            <Route path="/contact" element={ <div>스따가대고십으면연락애~</div> }></Route>
            <Route path="/*" element={ <div>멀봄ㅋ</div> }></Route>
          </Routes>
        </Main>
      </HashRouter>
    </ColorThemeProvider>
  );
}

export default App;
