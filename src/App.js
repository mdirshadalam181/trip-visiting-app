import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './NavPagesRoutes/Home';
import { About } from './NavPagesRoutes/About';
import { Service } from './NavPagesRoutes/Service';
import { Contact } from './NavPagesRoutes/Contact';
import { Login } from './NavPagesRoutes/Login';
import { SignUp } from './NavPagesRoutes/SignUp';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </div>
  );
}

export default App;
