import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { TeamCard } from '@/components/sections/TeamCard';
import { QuestionsCard } from '@/components/sections/QuestionsCard';
import { GrowthSection } from '@/components/sections/GrowthSection';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Dropdown } from '@/components/ui/Dropdown';

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

        {/* Blog Section - Success Stories */}
        <BlogSection />

        {/* Team Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Agents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamCard
              name="Aywsha Siddiqah"
              role="Co-Founder Leader"
              image="/images/team-1.jpg"
              verified={true}
            />
            <TeamCard
              name="Aywsha Siddiqah"
              role="Co-Founder Leader"
              image="/images/team-2.jpg"
              verified={true}
            />
          </div>
        </section>

        {/* Questions Card */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <QuestionsCard />
        </section>

        {/* UI Components Showcase */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">UI Components</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Buttons */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Buttons</h3>
              <div className="flex flex-col gap-3">
                <Button variant="primary" size="md">Read More</Button>
                <Button variant="primary" size="md">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* List Items */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Menu Items</h3>
              <div className="flex flex-col gap-2">
                <button className="flex items-center justify-between px-4 py-3 bg-slate-700/50 rounded-lg text-white hover:bg-purple-600/20 transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Menu Item
                  </span>
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dropdown */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Dropdown</h3>
              <Dropdown options={currencyOptions} placeholder="Select currency" />
            </div>

            {/* Segmented Control */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Segmented Control</h3>
              <div className="flex gap-2 p-1 bg-slate-700/50 rounded-lg">
                <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg transition-all">
                  Website
                </button>
                <button className="flex-1 px-4 py-2 text-slate-300 hover:text-white transition-all">
                  Dashboard
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Pagination</h3>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      num === 1
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="text-slate-500">...</span>
                <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tag */}
            <div className="bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Tag</h3>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 border-2 border-purple-500/30 rounded-lg text-white">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mar 11, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Growth CTA Section */}
        <GrowthSection />
      </main>

      <Footer />
    </div>
  );
}
