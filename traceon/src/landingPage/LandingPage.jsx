import { Box } from "@mui/material";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { CaseTypes } from "./CaseTypes";
import { WhyChooseUs } from "./WhyChooseUs";
import { Process } from "./Process";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Faq } from "./Faq";
import { Trust } from "./Trust";

export default function LandingPage() {
  return (
    <Box bgcolor="#F8FAFC">
      <Navbar />
      {/* Hero */}
      <Hero />

      {/* Trust */}
      <Trust />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* Why Choose */}
      <WhyChooseUs />

      {/* Case Types */}
      <CaseTypes />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
