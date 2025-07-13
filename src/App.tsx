import './style/css/common/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Header from './components/layout/Header.tsx';
import Main from './components/layout/Main.tsx';
import { useColorTheme } from '@/contexts/ColorThemeContext.ts';
import AboutPage from './pages/AboutPage.tsx';
import { useEffect } from 'react';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import './logic/i18n';
import LanguageSelector from './components/common/LanguageSelector.tsx';
import LoadingPage from './pages/LoadingPage.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

function App() {
  const { theme } = useColorTheme();

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.backgroundColor = theme.background;
    }
  }, [theme.background]);

  return (
    <>
      <HashRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/projects" element={ <ProjectsPage /> } />
            <Route path="/contact" element={ <ContactPage /> } />
            <Route path="/project/:slug" element={ <ProjectDetailPage /> }/>
            <Route path="/loading" element={ <LoadingPage /> } />
            <Route path="/*" element={ <ErrorPage /> } />
          </Routes>
        </Main>
      </HashRouter>
      <LanguageSelector />
    </>
  );
}

export default App;
