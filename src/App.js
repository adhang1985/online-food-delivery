
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from './screens/Signup';
import Cart from './screens/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/register' element={<Signup/>}/>
         <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
