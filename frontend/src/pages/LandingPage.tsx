import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SimulasiSection from '../components/SimulasiSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SimulasiSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
