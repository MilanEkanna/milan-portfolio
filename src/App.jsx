
import { Routes, Route } from 'react-router-dom';
import AboutSection from './Components/AboutSection';
// import Contact from './Components/Contact';
import Blogs from './Components/BlogsSection';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ReadingProgressBar from './Components/ReadingProgressBar';
import HireMeSection from './Components/HireMeSection';
import FooterSection from './Components/FooterSection';
import Social from './Components/Social';
import MyProjects from './Components/MyProjects';
import FaqSection from './Components/FaqSection';
import ProjectCareerConnect from './Components/ProjectCareerConnect';
import MyJourney from './Components/MyJourney';
import PageNotFound from './Components/PageNotFound';



function App() {
  return (
    <div >
      <ReadingProgressBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/hire" element={<HireMeSection />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/project-detail" element={<ProjectCareerConnect />} />
        <Route path="/journey" element={<MyJourney />} />

        {/* Optional: 404 page */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Social/>
      <FooterSection />
    </div>
  );
}

export default App;