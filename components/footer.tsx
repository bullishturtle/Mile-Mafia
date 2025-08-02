"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-wider text-foreground mb-4">THE MILE MAFIA</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-md">
              Movement is a commitment, not an option. Join Orlando's elite running crew, dedicated to pushing
              boundaries, fostering personal growth, and holding each other accountable.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-foreground mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#apply"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-foreground mb-6 tracking-wide">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted-foreground font-medium">Orlando, Florida</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:Landongill@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  Landongill@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+18508799172"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  +1 (850) 879-9172
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-border pt-12 mb-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-wide">STAY IN THE LOOP</h4>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest updates on runs, events, and community news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-border rounded-md focus:border-primary focus:outline-none text-foreground font-medium bg-input"
                />
                <button className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-bold rounded-md transition-colors duration-300 tracking-wide">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground font-medium">© 2024 THE MILE MAFIA. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
