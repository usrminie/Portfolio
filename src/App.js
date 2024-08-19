import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

import ResumePage from './components/ResumePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-serif">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <EducationSection />
              <SkillsSection />
              <ProjectSection />
              <ContactSection />
              
            </>
          } />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
