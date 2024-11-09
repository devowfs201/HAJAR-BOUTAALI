import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Formulaire from './components/Formulaire';
import Experts1 from './components/Experts1';
import Experts2 from './components/Experts2';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/formulaire">Formulaire</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Experts1">Experts1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Experts2">Experts2</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/Experts1" element={<Experts1 />} />
        <Route path="/Experts2" element={<Experts2 />} />
      </Routes>
    </div>
  </Router>
);

export default App;
