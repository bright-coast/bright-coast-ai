import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  useEffect(() => {
    // Load HighLevel form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Get in Touch</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 h-[492px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/hZQQRa2nOfZlgnUdgHIG"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-hZQQRa2nOfZlgnUdgHIG" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Contact Form"
            data-height="492"
            data-layout-iframe-id="inline-hZQQRa2nOfZlgnUdgHIG"
            data-form-id="hZQQRa2nOfZlgnUdgHIG"
            title="Website Contact Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
