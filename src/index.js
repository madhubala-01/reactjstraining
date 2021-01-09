import React from 'react';
import ReactDOM from 'react-dom';
import './route.css';
import App from './App';
import Mount from './mount';
import DerivedFromState from './derivedstatefprps';
import CompUpdate from './compupdate';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Notfound from './notfound';
import Home from './home';
import About from './about';
import Contact from './contact';

const example = (
  <Router>
      <header> Share Your Story!</header>
      
      <div className="list">   
      <nav>
        <ul className="align">
        <li><Link to="/">Home</Link>  </li>
      
        <li><Link to="/about">About</Link>  </li>
      
        <li><Link to="/contact">Contact</Link>  </li>
        </ul>
    <Switch>  
       <Route exact path="/" component={Home} /> 
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route component={Notfound} />  
    </Switch>  
    </nav> 
  </div> 
  
  </Router>

)

ReactDOM.render(example,
   document.getElementById('root')
);


