import './App.css';
import Categoria from './pages/Categoria'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import {botines, camisetas, categoria, categoriaCrud, eror404, home, login, pantalones, somos, usuarios, zapatillas} from './Routes/myRoutes'
import Somos from './pages/Somos';
import Login from './pages/Login';
import Zapatillas from './pages/Zapatillas';
import Camisetas from './pages/Camisetas';
import Pantalones from './pages/Pantalones'
import Error404 from './components/Error404';
import Botines from './pages/Botines';
import CrudCategoria from './pages/CrudCategoria';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path={login} element = {<Login/>}/>
          <Route path={home} element={<Home/>}/>
          <Route path={categoria} element={<Categoria/>}/>
          <Route path={somos} element={<Somos/>}/>
          <Route path={zapatillas} element={<Zapatillas/>}/>
          <Route path={camisetas} element={<Camisetas/>}/>
          <Route path={pantalones} element={<Pantalones/>}/>
          <Route path={botines} element={<Botines/>}/>
          <Route path={categoriaCrud} element={<CrudCategoria/>}/>
          <Route path={usuarios} element={<Usuarios/>}/>
          <Route path={eror404} element={<Error404/>}/>

      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
