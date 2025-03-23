import React from "react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  enrollmentRef?: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to Grow Glow Academy",
  description = "A nurturing environment where your child can learn, play, and grow. Our dedicated staff provides exceptional care in a safe and stimulating setting.",
  ctaText = "Enroll Now",
  onCtaClick = () => {},
  enrollmentRef,
  backgroundImage = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80",
}) => {
  return (
    <div className="relative w-full h-[600px] bg-blue-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8">{description}</p>
          <Button
            size="lg"
            onClick={() => {
              if (enrollmentRef && enrollmentRef.current) {
                enrollmentRef.current.scrollIntoView({ behavior: "smooth" });
              } else {
                onCtaClick();
              }
            }}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md text-lg shadow-lg transition-all relative z-20"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
