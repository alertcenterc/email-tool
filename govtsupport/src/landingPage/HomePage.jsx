import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import ProgramsSection from "./ProgramsSection";
import WhyChooseSection from "./WhyChooseSection";
import HowItWorksSection from "./HowItWorksSection";
import EligibilitySection from "./EligibilitySection";
import FAQSection from "./FAQSection";
import CommitmentSection from "./CommitmentSection";
import SupportingAmericaSection from "./SupportingAmericaSection";
import FinalCTASection from "./CTASection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import StatsSection from "./StatsSection";

export default function HomePage() {
  return (
    <Box>
     <HeroSection/>
     <StatsSection/>
     <ProgramsSection/>
     <SupportingAmericaSection/>
     <WhyChooseSection/>
     <HowItWorksSection/>
     <EligibilitySection/>
     <CommitmentSection/>
     <TestimonialsSection/>
     <FinalCTASection/>
     <FAQSection/>
     <Footer/>
    </Box>
  );
}
