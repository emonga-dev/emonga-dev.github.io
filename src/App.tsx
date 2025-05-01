import './style/css/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Header from './components/layout/Header.tsx';
import Main from './components/layout/Main.tsx';

function App() {
  return (
      <HashRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={ <MainPage /> }></Route>
            <Route path="/about" element={ <div>어바웃또</div> }></Route>
            <Route path="/projects" element={ <div>프로잭트들</div> }></Route>
            <Route path="/contact" element={ <div>스따가대고십으면연락애~</div> }></Route>
            <Route path="/*" element={ <div>멀봄ㅋ</div> }></Route>
          </Routes>
        </Main>
      </HashRouter>
  );
}

export default App;
