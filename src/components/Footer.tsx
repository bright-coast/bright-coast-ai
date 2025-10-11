const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Bright Coast AI</h3>
            <p className="text-primary-foreground/80">
              Bright Coast AI Pty Ltd<br />
              ACN 691720886<br />
              Sydney, Australia
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 mb-2">
              Ready to automate your business?
            </p>
            <a 
              href="mailto:rob@brightcoast.ai" 
              className="text-lg font-semibold hover:text-secondary transition-colors"
            >
              rob@brightcoast.ai
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Bright Coast AI Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
