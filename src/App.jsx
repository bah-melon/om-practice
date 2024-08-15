import './design/Global.scss'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkAt from '../src/pages/WorkAt/WorkAt';
import Whitepaper from '../src/pages/Whitepapers/Whitepaper';
import Contact from '../src/pages/Contact/Contact';
import OverOns from '../src/pages/OverOns/OverOns';
import AanDeSlag from './pages/AanDeSlag/AanDeSlag';
import Vacancies from './pages/Vacancies/Vacancies';
import Applicant from './pages/Applicant/Applicant';
import SignIn from './pages/Sign/SignIn';
import Signup from './pages/Sign/Signup';
import Profile from './pages/Profile/Profile';
import ApplicantsPerPosition from './pages/ApplicantsPerPosition/ApplicantsPerPosition';
import Expertise from './pages/Expertise/Expertise';
import Aanpak from './pages/Aanpak/Aanpak';

function App() {
  const routes = [
    { path: '/workat', element: <WorkAt /> },
    { path: '/whitepaper', element: <Whitepaper /> },
    { path: '/contact', element: <Contact /> },
    { path: '/over-ons', element: <OverOns /> },
    { path: '/aan-de-slag', element: <AanDeSlag /> },
    { path: '/vacancies/:id' , element : <Vacancies/>},
    { path: '/expertise' , element : <Expertise/>},
    { path: '/applicant' , element : <Applicant/>},
    { path: '/signin', element: <SignIn/>},
    { path: '/signup', element: <Signup/>},
    { path: '/profile', element: <Profile/>},
    { path: '/aanpak' , element: <Aanpak/>},
    { path: '/position/:id', element: <ApplicantsPerPosition />}
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
