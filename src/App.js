import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from '../src/Component/Registration/Registration';
import Login from './Component/Login/Login';





function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Registration' element={<Registration />} />    
     </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
