import {
  Box,
  
} from "@mui/material";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { Featured } from "./Featured";
import { Benefit } from "./Benefit";
import { HowItworks } from "./HowItWorks";
import { EarningsExamples } from "./EarningsExamples";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Faq } from "./Faq";

export default function LandingPage() {
  
  return (
    <Box bgcolor="#F8FAFC">
      
      <Navbar />
      <Hero/>
      <Stats/>
      <Featured/>
      <Benefit/>
      <HowItworks/>
      <EarningsExamples/>
      <Testimonials/>
      <Faq/>
      <FinalCTA/>
      <Footer/>
    </Box>
  );
}
