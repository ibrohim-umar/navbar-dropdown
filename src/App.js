
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Section from './components/Section';
import {Data } from './components/Data'

function App() {
  return (
   <div>

      <Section slides={Data} />
   </div>
     
      
       
      
     
   
  );
}

export default App;
