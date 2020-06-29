// por defecto
import React from 'react';
// componentes react
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// css
import './App.css';

//componentes materializecss
import Navbar from './componentes/Navbar';

// paginas / modulos
import PInicio from './paginas/PInicio';
import Footer from './componentes/Footer';
import Jovenes from './paginas/PJovenes';
import PVivo from './paginas/PVivo';
import PjovenesSede from './paginas/PjovenesSede';
import PSede from './paginas/PSede';


function App() {
  
  return (
      <Router>
      <header>
      <Navbar />
      </header>
      <main>
      <Switch>
      <Route path='/ccav/*'>
        <PSede />
      </Route>
      <Route path='/vivo/*'>
        <PVivo />
      </Route>
      <Route path='/vivo'>
        <PVivo />
      </Route>
      <Route path='/jovenes/*'>
        <PjovenesSede/>
      </Route>
      <Route path='/jovenes'>
        <Jovenes />
      </Route>
      <Route path='/documentos/*'>
      <center><h1>documento numero X</h1></center>
      </Route>
      <Route path='/documentos'>
        <center><h1>Area Documentos</h1></center>
      </Route>
      <Route path='/' exact>
          <PInicio />
      </Route>
      <Route> <h1>no existe</h1></Route>
           
      </Switch>
      </main>
      <Footer />
      </Router>
    
  );
}

export default App;
