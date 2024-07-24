// import React from 'react'

// export default function Routesss() {
//   return (
//     <div>Routesss</div>

//   )
// }

import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NestedRoute from './NestedRoute';

function App() {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/')
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button onClick={navigateToHome}>Go to Home</button>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/nested" component={NestedRoute} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

