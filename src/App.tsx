import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ROISimulation } from './components/ROISimulation';
// import { DashboardPreview } from './components/DashboardPreview';
// import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ChatWidget} from './components/ChatWidget'
import {ComparisonSection } from './components/FeatureComparison'
import { GetStartedPage } from './components/pages/GetStartedPage';
import { WatchDemoPage } from './components/pages/WatchDemoPage';
import { FreeTrialPage } from './components/pages/FreeTrialPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <ComparisonSection />
      <Features />
      <HowItWorks />
      <ROISimulation />
      <CTA />
      <Footer />
      <ChatWidget />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Home page dengan navigation */}
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <HomePage />
              </>
            }
          />
          {/* Get Started page tanpa navigation */}
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/watch-demo" element={<WatchDemoPage />} />
          <Route path="/free-trial" element={<FreeTrialPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;