
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import StudentLife from './components/StudentLife';
import Faculty from './components/Faculty';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Research from './components/research'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
            
              <Facilities />
              <StudentLife />
          
              <Admissions />
              <Contact />
            </>
          } />
        
          <Route path="/faculty" element={<Faculty />} />
           <Route path="/program" element={<Programs />} />
           <Route path='/research' element={  <Research/>}/>
        </Routes>
        
        <Footer />

        
      </div>
    </Router>
  );
}

export default App;