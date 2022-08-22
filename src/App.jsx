import Header from './Components/Header';
import Menu from './Components/Menu';
import { useState } from 'react';
import { context } from './context/context';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

const App = () => {
  const [dark,setDark]=useState(false);
  const [ltr,setLtr]=useState(true);
  const [color,setColor]=useState("fb8122");
  
    return (
    <context.Provider
    value={{dark,setDark,color,setColor,ltr,setLtr}}>
      <Menu/>
      <Header/>
      <Skills/>
      <Projects/>
    </context.Provider>
   );
}
 
export default App;