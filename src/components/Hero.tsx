import { useState } from "react";
import { Button } from "@/components/ui/button";
import oceanWaves from "@/assets/ocean-waves-hero.jpg";
import logo from "@/assets/bright-coast-logo.jpg";
import ContactForm from "./ContactForm";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-wave"
          style={{ 
            backgroundImage: `url(${oceanWaves})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={logo} 
              alt="Bright Coast AI" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Bright Coast AI
          </h1>
          
          {/* Subtext */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-secondary font-medium mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Automation that feels natural.
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            We help forward-thinking businesses streamline operations, connect systems, and build intelligent customer experiences. 
            From AI receptionists to end-to-end automation — we make technology effortless.
          </p>
          
          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button 
              size="lg"
              onClick={() => setIsContactOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="flex flex-col items-center gap-2 text-primary/60">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <svg 
              className="w-6 h-6 animate-bounce" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default Hero;
