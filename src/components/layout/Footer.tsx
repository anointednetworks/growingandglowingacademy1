import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";

interface FooterProps {
  logoSrc?: string;
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer = ({
  logoSrc = "/vite.svg",
  companyName = "Sunshine Daycare Center",
  address = "123 Bright Avenue, Kidsville, CA 90210",
  phone = "(555) 123-4567",
  email = "info@sunshinedaycare.example",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Staff", href: "/staff" },
    { label: "Contact", href: "/contact" },
    { label: "Enrollment", href: "/enrollment" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-blue-50 text-gray-700 py-12 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logoSrc} alt="Logo" className="h-10 w-10" />
            <h3 className="text-xl font-bold text-blue-600">{companyName}</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Providing a nurturing and educational environment for children to
            learn, play, and grow.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={socialLinks.facebook}
              aria-label="Facebook"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              aria-label="Twitter"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href={socialLinks.instagram}
              aria-label="Instagram"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-blue-600">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-blue-600">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <MapPin
                size={18}
                className="text-blue-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-sm">{address}</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm">{phone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm">{email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-blue-600">
            Stay Updated
          </h4>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for updates on events and activities.
          </p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:text-blue-500 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
