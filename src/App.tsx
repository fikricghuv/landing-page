import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ROISimulation } from './components/ROISimulation';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ChatWidget} from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <ROISimulation />
      <Testimonials />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;