import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Window from './components/Window';

function App() {
  const[isClicked, setIsClicked] = useState(false)

  const btnClick = () => {
      setIsClicked(true)
  }
  return (
    <div>
      <Header/>
      <div className="App">
      {
            isClicked? isClicked &&
             <Window/>
              : 
              <Tooltip title="Click to chat">
              <Fab onClick={btnClick} color="secondary" aria-label="add">
              <AddIcon  />
             </Fab>
             </Tooltip>
        }
      </div>
      
    </div>
  );
}

export default App;
