// por defecto
import React from 'react';
// componentes react
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// css
import './App.css';

//componentes materializecss
import Navbar from './componentes/Navbar';

// paginas / modulos
import PTipografia from './paginas/PTipografia';
import PInicio from './paginas/PInicio';
import PSede from './paginas/PSede';
import PLogotipo from './paginas/PLogotipo';
import PVivo from './paginas/PVivo';
import Footer from './componentes/Footer';



function sedeRuta(){
  let a = window.location.pathname, b;
  if(a!=="/"){
  b = a.split("/",3);
  if(b.length >= 3){
    return "/nones";
  }else{
    
  b= b[1].toString().toLocaleLowerCase();
  
  
  return "/"+ b;
    
  }
  
  }else{
    return "/nones";
  }
}

function App() {
  
  return (
    <div>
      <Navbar />
      <Router>
      <Switch>
      <Route exact path="/" >
        <PInicio />
      </Route>
      <Route path='/vivo'>
        <PVivo />
      </Route>
      <Route path={sedeRuta()} >
         <PSede />
      </Route>
      <Route  path="/media/tipografia">
      <PTipografia />
      </Route>
      <Route  path="/media/logotipo" >
         <PLogotipo />
      </Route>      
      
      <Route component={()=>{
        return (
          <h1>NO EXISTE</h1>
        )
      }}/>
       </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
