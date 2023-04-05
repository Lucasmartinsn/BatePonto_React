import Home from './components/login/leald'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App() {

  return (
/*
 <div className='App' >
    <div>
      <Nav variant='tabs' style={{background: '#171821', height: '80px', border:"none"}}>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/">Home</Nav.Link>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/Pessoas" >Pessoas</Nav.Link>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/Equipes">Equipes</Nav.Link>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/Projetos">Projetos</Nav.Link>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/Task">Task</Nav.Link>
        <Nav.Link style={{background: '#171821', color: '#87888C', marginLeft:'2%', fontSize:'1.3rem'}} as={Link} to="/Sobre">Sobre</Nav.Link>
      <div id='img'><img src={teste} alt=" " width={'80%'} style={{marginTop:'-53px'}}/></div>
      </Nav>
    </div>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Pessoas" element={<Pessoas/>}></Route>
      <Route path="/Equipes" element={<Equipes/>}></Route>
      <Route path="/Projetos" element={<Projetos/>}></Route>
      <Route path="/Task" element={<Task/>}></Route>
      <Route path="/Sobre" element={<Sobre/>}></Route>

    </Routes>
    </BrowserRouter>
</div>*/

    <Home/>


  );
}

export default App;
