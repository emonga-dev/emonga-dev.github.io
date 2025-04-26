import './style/css/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> }></Route>
        <Route path="/about" element={ <div>어바웃또</div> }></Route>
        <Route path="/*" element={ <div>멀봄ㅋ</div> }></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
