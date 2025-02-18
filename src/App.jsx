import './App.css'
import Home from './pages/Home';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Favorite from './pages/Favorite';
import { Routes, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MoviesHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorite">Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App