import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './component/navbar';
import Home from './pages/home';
import Events from './pages/events';
import Footbar from './component/footbar';
import Signin from './pages/signin';
import Signup from './pages/signup';
import EventPageDetails from './pages/eventDetailPage';
import EventPage from './pages/eventPage';
import GroupPage from './pages/groupPage';
import SiginSuccessFull from './pages/signinSuccessfull';
import GroupDetailsPage from './pages/groupDetail.jsx';
import PrivateRoute from './pages/privateRoute.jsx';


function App() {
  

  return (
    
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/events"  element={<Events/>}/>
          <Route path="/signin"  element={<Signin/>}/>

          <Route path="/signinSuccess"  element={<SiginSuccessFull/>}/>

          
          <Route path="/signup"  element={<Signup/>}/>
          

          <Route path="/group"  element={<PrivateRoute> <GroupPage /> </PrivateRoute>}/>

          <Route path="/groupDetails/:id"  element={ <PrivateRoute>  <GroupDetailsPage/>  </PrivateRoute> }/>


          <Route path="/event"  element={ <PrivateRoute>   <EventPage/> </PrivateRoute>  }/>
          <Route path="/eventDetails/:id"  element={  <PrivateRoute> <EventPageDetails/> </PrivateRoute> }/>
          

          
        </Routes>

      <Footbar/>

    </Router>
  )
}

export default App
