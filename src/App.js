import './App.css';
import Header from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectsList from './components/ProjectsList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path = '/About' element={<About/>} />
        <Route path ='/Projects' element={<ProjectsList/>}/>
        <Route path='/Contact' element ={<Contact/>} />
        {/* <Route path ='/Resume' element ={<Resume/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
