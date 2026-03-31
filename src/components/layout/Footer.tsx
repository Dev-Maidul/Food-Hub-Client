import { Facebook, Instagram, Twitter, Send } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary/40 backdrop-blur-xl border-t border-border">
      <div className="section-container py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                FoodHub
              </span>
            </div>

            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Your favorite food from the best local restaurants, delivered fast
              to your door. Experience speed, taste, and convenience.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-2 text-foreground">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center bg-muted rounded-full p-1 overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4 capitalize text-foreground">
                {key}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FoodHub. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};