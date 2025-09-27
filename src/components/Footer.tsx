import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-max section-padding py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bhavin Topiwala</h3>
                <p className="text-sm text-muted-foreground">BJP Yuva Morcha Surat Mahanagar Adhyakash</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Dedicated to serving the community and empowering youth through innovative 
              initiatives and sustainable development programs in Surat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 hero-gradient rounded-full text-white hover:scale-110 smooth-transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 hero-gradient rounded-full text-white hover:scale-110 smooth-transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 hero-gradient rounded-full text-white hover:scale-110 smooth-transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Surat, Gujarat</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contact@bhavintopiwala.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bhavin Topiwala. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Bharatiya Janata Yuva Morcha, Surat Mahanagar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;