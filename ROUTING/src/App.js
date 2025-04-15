import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import Home1 from './pages/Home1';
import About1 from './pages/About1';
import Contact1 from './pages/Contact1';


function App() {
  return (
    <div style={{textAlign:"center",padding:"20"}}>
      {/* <BrowserRouter>
      <Link to={'/'} style={{marginRight:"15px"}}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Link to={'/'}>HOME</Link>
          <Link style={{margin:"10px"}} to={'/about1'}>ABOUT</Link>
          <Link to={'/contact1'}>CONTACT</Link>
        <Routes>
          <Route path='/' element={<Home1></Home1>}></Route>
          <Route path='/about1' element={<About1></About1>}></Route>
          <Route path='/contact1' element={<Contact1></Contact1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
