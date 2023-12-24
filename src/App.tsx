import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Dashboard,
  Part1,
  Part2,
  Part3,
  Part4,
  Part5,
  Part6,
  PostDetail,
  Error,
  PrivateRoute,
} from './pages';
import { AuthContext } from '@/contexts/auth_context';
import { AlertDefault } from '@/components/Alert/AlertDefault';
import AlertDestructive from '@/components/Alert/AlertDestructive';

const routes = [
  { path: '/', element: <Home />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: true },
  { path: '/part1', element: <Part1 />, auth: false },
  { path: '/part2', element: <Part2 />, auth: false },
  { path: '/part3', element: <Part3 />, auth: false },
  { path: '/part4', element: <Part4 />, auth: false },
  { path: '/part5', element: <Part5 />, auth: false },
  { path: '/part6', element: <Part6 />, auth: false },
  { path: '/post/:category/:postId', element: <PostDetail />, auth: false },
  { path: '*', element: <Error />, auth: false },
];

function App() {
  const {
    successDescription,
    setSuccessDescription,
    errorDescription,
    setErrorDescription,
  } = useContext(AuthContext);
  return (
    <>
      {successDescription && (
        <AlertDefault
          description={successDescription}
          setSuccessDescription={setSuccessDescription}
        />
      )}
      {errorDescription && (
        <AlertDestructive
          description={errorDescription}
          setErrorDescription={setErrorDescription}
        />
      )}
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.auth ? (
                  <PrivateRoute>{route.element}</PrivateRoute>
                ) : (
                  route.element
                )
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
