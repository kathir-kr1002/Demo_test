 import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Basic from './Basic';
import State from './State';
import Third from './Third';
import Forms from './Forms';
import Lifecycle from './Lifecycle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NestedRoute from './NestedRoute';
import Statelifts from './Statelifts';
import Optimistic from './Optimistic';
import Authentication from './Authentication ';
import Homies from './Homies';
import ProtectedPage from './ProtectedPage';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from './Error'; 
import { AppProvider } from './Context'; 
import Contextpair from './Contextpair';

const LazyComponent = React.lazy(() => import('./Lazy'));

function Navigation() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
    <div className='move'>
    <nav className='design'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/nested">Nested</Link></li>
        <li><Link to="/basic">Basic Component Creation</Link></li>
        <li><Link to="/state">State Management</Link></li>
        <li><Link to="/third">Conditional Rendering</Link></li>
        <li><Link to="/forms">Forms and Controlled Components</Link></li>
        <li><Link to="/lifecycle">Lifecycle Methods or useEffect Hook</Link></li>
        <li><Link to="/statelifts">State Lift-Up and Props Drilling</Link></li>
        <li><Link to="/lazy">Code Splitting and Lazy Loading</Link></li>
        <li><Link to="/optimistic">Optimistic UI Updates</Link></li>
        <li><Link to="/authentication">Authentication and Protected Routes</Link></li>
        <li><Link to="/homies">Homies</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li><Link to="/error">Error Boundary Implementation</Link></li>
        <li><Link to="/context">Context API or Redux Integration</Link></li>
      </ul>
    </nav>
    </div>
     <button onClick={navigateToHome}>Go to Home</button>
     </div>
  );
}

function App() {
  return (
    <Router>
      <AppProvider> 
        <div className="App">
          <Navigation />
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/nested/*" element={<NestedRoute />} />
                <Route path="/basic" element={<Basic />} />
                <Route path="/state" element={<State />} />
                <Route path="/third" element={<Third />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/lifecycle" element={<Lifecycle />} />
                <Route path="/statelifts" element={<Statelifts />} />
                <Route path="/lazy" element={<LazyComponent />} />
                <Route path="/optimistic" element={<Optimistic />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/homies" element={<Homies />} />
                <Route path="/protected" element={<ProtectedRoute element={<ProtectedPage />} />} />
                <Route path="/error" element={<ErrorBoundary />} />
                <Route path='/context' element={<Contextpair />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
