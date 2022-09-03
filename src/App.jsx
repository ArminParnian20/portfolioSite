import Menu from './Components/Menu';
import { useState } from 'react';
import { context } from './context/context';
import Menu2 from './Components/Menu2';
import Header from './Components/Header';
import Skill from './Components/Skill';
import Project from './Components/Project';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Loader from './Components/Loader';
const App = () => {
  const [dark,setDark]=useState(true);
    return (
    <context.Provider
    value={{dark,setDark}}>
      <Menu/>
      <Menu2/>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/head' element={ <Header/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/skill' element={ <Skill/>}></Route>
      </Routes>
    </context.Provider>
   );
}
 
export default App;