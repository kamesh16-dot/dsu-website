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
import Life from './components/Life';
import LatestEventsPage from './components/Latestevent';
import CareerGuidance from './components/Carrier';
import MoUPage from './components/Mou';
import MouActivity from './components/Mouactivity';
import HRDCFaculty from './components/Hrdcfacultiy';
import ABCPage from './components/Acadamiccredit';
import Clubs from './components/Club';
import PatentsPage from './components/Patent';
import Collbaration from './components/Collabration'
import Icollab from './components/Industrial'
import Rfaclities from './components/Rfaclities'
import ScholarshipPage from './components/Scholarship';
import TrainingPlacementPage from './components/Trainingplacement';
import Gallery from './components/Gallery'
import Photos from './components/Photos'
import SyllabusPage from './components/Sylabus';
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
          

             <Life/>
             
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
                <Route path='/erc' element={   <Devloment />} />
                <Route path='/lab' element={     <Facilities />} />
                <Route path='/care' element={     <CareerGuidance />} />
                <Route path='/mou' element={     <MoUPage/>} />
                 <Route path='/moua' element={     <MouActivity/>} />
                  <Route path='/hr' element={     <HRDCFaculty />} />
                     <Route path='/Admission' element={ <Admissions /> } />
                    <Route path='/abc' element={ <ABCPage /> } />
                       <Route path='/club' element={ <Clubs /> } />
                        <Route path='/patent' element={ <PatentsPage /> } />
                           <Route path='/collab'  element={ <Collbaration/> } />
                             <Route path='/icollab' element={ <Icollab/> } />
                                <Route path='/rf' element={ <Rfaclities/> } />
                                  <Route path='/sch' element={ <ScholarshipPage/> } />
                                   <Route path='/tap' element={ <TrainingPlacementPage/> } />
                                       <Route path='/Gallery' element={ <Gallery/> } />
                                           <Route path='/Photos' element={ <Photos/> } />
                                               <Route path='/sys' element={ <SyllabusPage/> } />
        </Routes>

        <Footer />


      </div>
    </Router>
  );
}

export default App;