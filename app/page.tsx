import { UserButton } from "@clerk/nextjs";
import Hero from "../components/Hero";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ContributeCTA from "@/components/ContributeCTA";

export default function Home() {
  return (
   <>
   <Hero/>
   <Features/>
   <Pricing/>
   <ContributeCTA/>
   <Footer/>
   </>
  );
}
