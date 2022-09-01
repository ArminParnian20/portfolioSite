import Menu from './Components/Menu';
import { useState } from 'react';
import { context } from './context/context';
import Menu2 from './Components/Menu2';
import Header from './Components/Header';
const App = () => {
  const [dark,setDark]=useState(false);  
    return (
    <context.Provider
    value={{dark,setDark}}>
      <Menu/>
      <Menu2/>
      <Header/>
    </context.Provider>
   );
}
 
export default App;