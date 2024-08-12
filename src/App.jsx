import './design/Global.scss'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkAt from '../src/pages/WorkAt/WorkAt';
import Whitepaper from '../src/pages/Whitepapers/Whitepaper';
import Contact from '../src/pages/Contact/Contact';
import OverOns from '../src/pages/OverOns/OverOns';
import AanDeSlag from './pages/AanDeSlag/AanDeSlag'
<<<<<<< HEAD
import Vacancies from './pages/Vacancies/Vacancies'
=======
import SignIn from './pages/Sign/SignIn';
import Signup from './pages/Sign/Signup';
import Profile from './pages/Profile/Profile';
>>>>>>> 35612cb39aeac581dbb53fdf88a1e3d186bab54a

function App() {
  const routes = [
    { path: '/workat', element: <WorkAt /> },
    { path: '/whitepaper', element: <Whitepaper /> },
    { path: '/contact', element: <Contact /> },
    { path: '/over-ons', element: <OverOns /> },
    { path: '/aan-de-slag', element: <AanDeSlag /> },
<<<<<<< HEAD
    { path: '/vacancies/:id' , element : <Vacancies/>}
=======
    { path: '/signin', element: <SignIn/>},
    { path: '/signup', element: <Signup/>},
    { path: '/profile', element: <Profile/>}
>>>>>>> 35612cb39aeac581dbb53fdf88a1e3d186bab54a
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
