import './design/Global.scss'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkAt from '../src/pages/WorkAt/WorkAt';
import Whitepaper from '../src/pages/Whitepapers/Whitepaper';
import Contact from '../src/pages/Contact/Contact';
import OverOns from '../src/pages/OverOns/OverOns';
import AanDeSlag from './pages/AanDeSlag/AanDeSlag'
import Vacancies from './pages/Vacancies/Vacancies'
import SignIn from './pages/Sign/SignIn';
import Signup from './pages/Sign/Signup';
import Profile from './pages/Profile/Profile';
import ApplicantsPerPosition from './pages/ApplicantsPerPosition/ApplicantsPerPosition';
import Applicant from './pages/Applicant/Applicant';
import CreatePosition from './pages/CreatePositon/CreatePosition';
import Applications from './pages/Applications/Applications';
import ShowPositions from './pages/ShowOpenPositions/ShowPositions';

function App() {
  const routes = [
    { path: '/workat', element: <WorkAt /> },
    { path: '/whitepaper', element: <Whitepaper /> },
    { path: '/contact', element: <Contact /> },
    { path: '/over-ons', element: <OverOns /> },
    { path: '/aan-de-slag', element: <AanDeSlag /> },
    { path: '/vacancies/:id' , element : <Vacancies/>},
    { path: '/signin', element: <SignIn/>},
    { path: '/signup', element: <Signup/>},
    { path: '/profile', element: <Profile/>},
    { path: '/create-position', element: <CreatePosition/>},
    { path: '/applications', element: <Applications/>},
    { path: '/open-positions', element: <ShowPositions/>},
    { path: '/position/:id', element: <ApplicantsPerPosition />},
    { path: '/applicant/:id', element: <Applicant/>},
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
