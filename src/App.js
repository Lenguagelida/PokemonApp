import './App.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from "./components/Footer";
import PokemonContainer from './components/PokemonContainer';
import Items from './components/Items';
import Contacto from './components/Contacto';

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/pokemons/' element={<PokemonContainer/>}/>
          <Route exact path='/items/' element={<Items/>}/>
          <Route exact path='contacto/'element={<Contacto/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
