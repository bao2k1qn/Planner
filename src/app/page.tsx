import Divider from '@/components/_shared/Divider';
import ActionReminderSection from '@/components/sections/ActionReminderSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';
import EmployeesSection from '@/components/sections/EmployeesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Divider className="py-12" id="features-section" />
            <FeaturesSection />
            <Divider className="py-12" id="cta-section" />
            <CTASection />
            <Divider className="py-12" id="social-proof-section" />
            <SocialProofSection />
            <Divider className="py-12" id="employees-section" />
            <EmployeesSection />
            <Divider className="py-12" id="contacts-section" />
            <ContactSection />
            <Divider className="py-12" />
            <ActionReminderSection />
        </>
    );
}
