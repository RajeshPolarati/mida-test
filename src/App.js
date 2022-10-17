import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discounts from './components/Discounts/Discounts';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login/>}/>
        <Route path='/auth/confirm' element={<Discounts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
