import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { TeamCard } from '@/components/sections/TeamCard';
import { QuestionsCard } from '@/components/sections/QuestionsCard';
import { GrowthSection } from '@/components/sections/GrowthSection';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Dropdown } from '@/components/ui/Dropdown';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import PodcastSection from '@/components/sections/PodcastSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FAQSection from '@/components/sections/FAQSection';
import LocationMapSection from '@/components/sections/LocationMapSection';

const currencyOptions = [
  { value: 'usd', label: 'USD - US Dollar', icon: '🇺🇸' },
  { value: 'gbp', label: 'GBP - British Pound', icon: '🇬🇧' },
  { value: 'cad', label: 'CAD - Canadian Dollar', icon: '🇨🇦' },
  { value: 'aud', label: 'AUD - Australian Dollar', icon: '🇦🇺' },
  { value: 'nzd', label: 'NZD - New Zealand Dollar', icon: '🇳🇿' },
  { value: 'sgd', label: 'SGD - Singapore Dollar', icon: '🇸🇬' },
  { value: 'bdt', label: 'BDT - Bangladeshi Taka', icon: '🇧🇩' },
  { value: 'eur', label: '(Germany) EUR - Euro', icon: '🇩🇪' },
  { value: 'eur-italy', label: '(Italy) EUR - Euro', icon: '🇮🇹' },
  { value: 'eur-france', label: '(France) EUR - Euro', icon: '🇫🇷' },
  { value: 'inr', label: 'INR - Indian Rupee', icon: '🇮🇳' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main>
        {/* Hero Section with Video */}
        <HeroSection />

        {/* Our Services Section */}
        <ServicesSection />

        {/* Our Latest Works - Portfolio */}
        <PortfolioSection />

        {/* Why Choose Metro Solver */}
        <WhyChooseSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Blog Section - Success Stories */}
        <BlogSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Case Studies & Success Stories */}
        <CaseStudiesSection />

        {/* Podcast Section */}
        <PodcastSection />

        {/* Contact Form Section */}
        <ContactFormSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Location Map Section */}
        <LocationMapSection />

      </main>

      <Footer />
    </div>
  );
}
