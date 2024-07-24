import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component }) {
  const token = localStorage.getItem('token');

  return token ? <Component /> : <Navigate to="/authentication" />;
}

