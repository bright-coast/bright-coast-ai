import { useState } from "react";
import { Button } from "@/components/ui/button";
import oceanWaves from "@/assets/ocean-waves-loop.webm";
import logo from "@/assets/bright-coast-logo.png";
import ContactForm from "./ContactForm";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={oceanWaves} type="video/webm" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={logo} 
              alt="Bright Coast AI" 
              className="h-36 md:h-40 w-auto object-contain"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            BRIGHT COAST AI
          </h1>
          
          {/* Subtext */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-ocean-teal-dark font-medium mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Automation that feels natural
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            We help forward-thinking businesses streamline operations, connect systems, and build intelligent customer experiences. 
            From AI receptionists to end-to-end automation, we make technology effortless.
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
      </section>

      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default Hero;
