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


function App() {
  
  return (
      <Router>
      <header>
      <Navbar />
      </header>
      <main>
      <Switch>
      <Route path='/vivo'>
        <h1>hola vivo</h1>
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
