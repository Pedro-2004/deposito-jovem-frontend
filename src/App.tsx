import Budget from '././pages/Budget/Budget';
import Login from '@/pages/login/index';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Budget" element={<Budget />} />
      </Routes>
    </>
  );
};

export default App;
