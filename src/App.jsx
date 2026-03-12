import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PushSection from './components/PushSection';
import GeofencingSection from './components/GeofencingSection';
import AutomationsSection from './components/AutomationsSection';
import DashboardSection from './components/DashboardSection';
import HowItWorks from './components/HowItWorks';
import BonusReviews from './components/BonusReviews';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import Deliverables from './components/Deliverables';
import FooterCTA from './components/FooterCTA';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const HomePage = () => (
    <>
        {/* Section 1: Hero (Dark Navy) */}
        <Hero />

        {/* Unified Light Block: Features */}
        <div className="bg-white relative overflow-clip" style={{ contain: 'layout style paint', contentVisibility: 'auto', containIntrinsicSize: 'auto 2400px' }}>
            {/* Subtle Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-[rgba(255,0,212,0.12)] via-[rgba(255,255,255,0)] to-[rgba(0,163,255,0.12)] pointer-events-none mix-blend-multiply" />


            <PushSection />
            <GeofencingSection />
            <AutomationsSection />
        </div>

        {/* Unified Dark Block 1 */}
        <div className="bg-qard-dark relative overflow-clip" style={{ contain: 'layout style paint', contentVisibility: 'auto', containIntrinsicSize: 'auto 2000px' }}>
            {/* Section 5: Realtime Dashboard */}
            <DashboardSection />

            {/* Section 6: How it works */}
            <HowItWorks />
        </div>

        {/* Unified Light Block: Reviews & Industry */}
        <div className="bg-white" style={{ contain: 'layout style paint', contentVisibility: 'auto', containIntrinsicSize: 'auto 1200px' }}>
            <BonusReviews />
            <TargetAudience />
        </div>

        {/* Unified Dark Block 2: Pricing */}
        <div className="bg-qard-dark relative overflow-hidden" style={{ contain: 'layout style paint', contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}>
            <Pricing />
        </div>

        {/* Section 10: Deliverables (Light) */}
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}>
            <Deliverables />
        </div>

        {/* Section 11: Contact Form (Light) */}
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
            <ContactCTA />
        </div>

        {/* Section 12: Main Footer CTA (Dark) */}
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
            <FooterCTA />
        </div>
    </>
);

function App() {
    return (
        <Router>
            <div className="antialiased w-full overflow-clip flex flex-col min-h-screen bg-qard-dark">
                {/* Global Navigation */}
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                        <Route path="/agb" element={<AGB />} />
                        <Route path="/ueber-uns" element={<AboutUs />} />
                        <Route path="/kontakt" element={<Contact />} />
                    </Routes>
                </main>

                {/* Global Footer (Dark) */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
