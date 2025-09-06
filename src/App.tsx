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
import PDFViewer from './components/PDFViewer'
import CulturalEventsPage from './components/Culturals';
import Sa from './components/Student-a';
import Placement from './components/placement-obj';
import Hrdc from './components/hrdc';
import StickyNavButtons from './components/Sticky';
import ChatBot from './components/chatbot';
import InternshipPage from './components/internship';
import Devloment from './components/Devlopment';
import Placementcomponent from './components/Placementcomponent'
import WhyChooseDsu from './components/Choose';
import CampusActivities from './components/caa';
import Life from './components/Life';
import LatestEventsPage from './components/Latestevent';
import CareerGuidance from './components/Carrier';
import MoUPage from './components/Mou';
import MouActivity from './components/Mouactivity';
import HRDCFaculty from './components/Hrdcfacultiy';
function App() {
  return (
    <Router basename="/dsu-website/">
      <div className="min-h-screen bg-white">
        <Header />
        <StickyNavButtons />
        <ChatBot />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
               <WhyChooseDsu />
              <Placementcomponent/>
           
             <LatestEventsPage/>
            < CampusActivities/>

             <Life/>
              <Admissions />
              <Contact />
             
            </>
          } />

          <Route path="/faculty" element={<Faculty />} />
          <Route path="/program" element={<Programs />} />
          <Route path='/research' element={<Research />} />
           <Route path='/clander' element={ <PDFViewer />} />
            <Route path='/cul' element={ < CulturalEventsPage />} />
             <Route path='/Sa' element={ < Sa />} />
              <Route path='/Students' element={  <StudentLife />} />
                <Route path='/placement' element={  <Placement />} />
                <Route path='/hrdc' element={  <Hrdc />} />
                <Route path='/intern' element={    <InternshipPage />} />
                <Route path='/erc' element={    <Devloment />} />
                <Route path='/lab' element={     <Facilities />} />
                <Route path='/care' element={     <CareerGuidance />} />
                <Route path='/mou' element={     <MoUPage/>} />
                 <Route path='/moua' element={     <MouActivity/>} />
                  <Route path='/hr' element={     <HRDCFaculty />} />
        </Routes>

        <Footer />


      </div>
    </Router>
  );
}

export default App;