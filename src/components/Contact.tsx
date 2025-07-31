import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-6">
            <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Let's
              <br />
              Work
            </h2>
          </div>
          <div className="col-span-6 flex flex-col justify-end">
            <div className="text-white">
              Ready to create something exceptional? Let's discuss your project 
              and explore how design engineering can drive your business forward.
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Contact Form */}
          <div className="col-span-8">
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                    Name
                  </label>
                  <Input 
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white px-0 py-3"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white px-0 py-3"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Company
                </label>
                <Input 
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white px-0 py-3"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Project Details
                </label>
                <Textarea 
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white px-0 py-3 min-h-[120px] resize-none"
                  placeholder="Tell me about your project, goals, timeline, and budget..."
                />
              </div>

              <button 
                type="submit"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all py-4 px-8 uppercase tracking-wide font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="col-span-4">
            <div className="space-y-8">
              <div>
                <div className="text-sm uppercase tracking-wider text-white/60 mb-3">
                  Email
                </div>
                <a href="mailto:hello@designengineer.dev" className="text-white hover:text-white/70 transition-colors">
                  hello@designengineer.dev
                </a>
              </div>

              <div>
                <div className="text-sm uppercase tracking-wider text-white/60 mb-3">
                  Phone
                </div>
                <a href="tel:+15551234567" className="text-white hover:text-white/70 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <div className="text-sm uppercase tracking-wider text-white/60 mb-3">
                  Location
                </div>
                <div className="text-white">
                  San Francisco, CA
                  <br />
                  Available remotely
                </div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-wider text-white/60 mb-3">
                  Response Time
                </div>
                <div className="text-white">
                  Within 24 hours
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/20">
                <div className="text-sm uppercase tracking-wider text-white/60 mb-4">
                  Connect
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="text-white hover:text-white/70 transition-colors text-sm">
                    LinkedIn
                  </a>
                  <a href="#" className="text-white hover:text-white/70 transition-colors text-sm">
                    GitHub
                  </a>
                  <a href="#" className="text-white hover:text-white/70 transition-colors text-sm">
                    Dribbble
                  </a>
                  <a href="#" className="text-white hover:text-white/70 transition-colors text-sm">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}