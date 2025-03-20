import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logo?: string;
  menuItems?: Array<{ label: string; href: string }>;
  enrollmentCTA?: string;
}

const Header = ({
  logo = "/vite.svg",
  menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Staff", href: "/staff" },
    { label: "Contact", href: "/contact" },
  ],
  enrollmentCTA = "Enroll Now",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Daycare Logo" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-primary">
            Happy Kids Daycare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/enrollment">{enrollmentCTA}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 bg-white px-4 py-5 shadow-md md:hidden",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block text-base font-medium text-gray-600 transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/enrollment" onClick={() => setMobileMenuOpen(false)}>
                  {enrollmentCTA}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
