
import './App.css';

import { Plan } from './Plan';
import image from './picture.jpg';




function App(){ 
  return (
    
    <div className='heading'>
      <div className="header">  
        <h1>Planung für den tag</h1>
        <Plan/>
        <div className='thoto'>
          <img src={image}width="300px"alt="thoto"/>
      </div>

      </div>
      </div>
    
      
      
      
  
    
  );
}

export default App;
