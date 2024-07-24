import React from 'react';
import { Route, Link, useParams, Routes } from 'react-router-dom';

function Subroute1() {
  return <h3>Subroute 1 Content</h3>;
}

function Subroute2() {
  return <h3>Subroute 2 Content</h3>;
}

function NestedRoute() {
  const {  url } = useParams();

  return (
    <div>
      <h2>Nested Route Page</h2>
      <h3>Demonstrate understanding of route configuration, nested routes,
and programmatic navigation.</h3>
      <ul>
        <li><Link to={`${url}/subroute1`}>Subroute 1</Link></li>
        <li><Link to={`${url}/subroute2`}>Subroute 2</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<h3>Please select a subroute.</h3>} />
        <Route path="subroute1" element={<Subroute1 />} />
        <Route path="subroute2" element={<Subroute2 />} />
      </Routes>
    </div>
  );
}

export default NestedRoute;
