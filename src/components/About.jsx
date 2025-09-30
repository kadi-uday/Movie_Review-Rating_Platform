import React from 'react';
import AboutHeroSection from './AboutHeroSection';
import AboutMissionSection from './AboutMissionSection';
import AboutFeaturesSection from './AboutFeaturesSection';
import AboutStatsSection from './AboutStatsSection';
import AboutTechnologySection from './AboutTechnologySection';

const About = () => (
  <div className="min-h-screen bg-background">
    <AboutHeroSection />
    <AboutMissionSection />
    <AboutFeaturesSection />
    <AboutStatsSection />
    <AboutTechnologySection />
  </div>
);

export default About;
