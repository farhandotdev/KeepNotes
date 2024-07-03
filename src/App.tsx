import { useState } from 'react';
import './App.css';
import { ThemeContext } from './context/theme/theme';
import Home from './pages/Home';
import Switch from 'react-switch'
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false);

  const changeHandler = (check:boolean) =>{
    setChecked(!checked);
    if(check){
      setTheme('dark')
    }else{
      setTheme('light')
    }
    console.log(checked,check);
  }
  
  return(  
      <ThemeContext.Provider value={theme}>
        <Switch 
        onChange={changeHandler}
        checked={checked}
        className='react-switch'
        checkedIcon={<FaSun size={22} style={{color:'orange', paddingTop:'3px', paddingLeft:'4px'}}></FaSun>}
        uncheckedIcon={<FaMoon size={22} style={{color:'white', paddingTop:'3px', paddingRight:'4px',float:'right'}}/>}
        onColor='#ddd'
        offColor='#333'
        onHandleColor='#333'
        offHandleColor='#ddd'
        >

        </Switch>
        <Home></Home>
      </ThemeContext.Provider>
  );
}

export default App;
