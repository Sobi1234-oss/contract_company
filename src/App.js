import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import AboutUs from './pages/about-us';
import OurServices from './pages/our-services';
import FeaturesPage from './pages/features-page';
import ContactPage from './pages/contact-page';
import ScrollToTop from './components/ScrollToTop'; // Import the component
import OurTeam from './pages/our-team';
 //import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
return (
	<Router>
	<ScrollToTop /> 
	
	<Navbar />
	<Routes>
  <Route exact path='/' element={<Home />} />
  <Route path='/about-us' element={<AboutUs/>} />
  <Route path='/contact-page' element={<ContactPage/>} />
  <Route path='/our-services' element={<OurServices/>} />
  <Route path='/clients-page' element={<FeaturesPage/>} />
 
  <Route path='/our-team' element={<OurTeam/>} />        {/* New */}
</Routes>
	<Footer/>
	</Router>
);
}

export default App;
