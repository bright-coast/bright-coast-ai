import { useEffect, useRef, useState } from "react";
import { Bot, Workflow, Plug } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description: "Intelligent virtual assistants that handle customer inquiries, bookings, and support with natural conversation flow."
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "Streamline repetitive tasks and business processes with smart automation that learns and adapts to your needs."
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description: "Connect your tools and systems seamlessly. We build bridges between your software to create unified workflows."
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations with staggered delays
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          What We Do
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
