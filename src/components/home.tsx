import React from "react";
import HeroSection from "./sections/HeroSection";
import NewsletterForm from "./newsletter/NewsletterForm";
import EventCalendar from "./calendar/EventCalendar";
import EnrollmentSection from "./enrollment/EnrollmentSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Grow Glow Academy"
        description="A nurturing environment where your child can learn, play, and grow. Our dedicated staff provides exceptional care in a safe and stimulating setting."
        ctaText="Enroll Now"
        onCtaClick={() => console.log("Enrollment button clicked")}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* About Us Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Approach to Childcare
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At Grow Glow Academy, we believe every child deserves a nurturing
            environment that fosters growth, creativity, and joy. Our curriculum
            balances structured learning with free play, helping children
            develop essential skills while having fun.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
              <p className="text-gray-600">
                Age-appropriate curriculum designed to stimulate cognitive
                development and curiosity.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Development</h3>
              <p className="text-gray-600">
                Activities that encourage teamwork, sharing, and building
                meaningful friendships.
              </p>
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Physical Growth</h3>
              <p className="text-gray-600">
                Safe, supervised activities that promote motor skills
                development and healthy habits.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-blue-50 py-12 rounded-lg">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600">
                Subscribe to our newsletter to receive updates on daycare
                activities, upcoming events, and helpful parenting resources. We
                send monthly newsletters with valuable information for parents
                and guardians.
              </p>
            </div>
            <div className="md:w-1/2">
              <NewsletterForm
                title="Subscribe to Our Newsletter"
                description="Stay updated with our latest news, events, and special offers."
                buttonText="Subscribe"
              />
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed about our scheduled activities, special events, and
              important dates. Our calendar is regularly updated to help you
              plan ahead.
            </p>
          </div>
          <EventCalendar className="max-w-4xl mx-auto" />
        </section>

        {/* Enrollment Section */}
        <EnrollmentSection
          title="Join Our Daycare Family"
          description="Start your child's journey with us by completing our enrollment application. You can preview the form, download it as a PDF, or fill it out online."
        />

        {/* Testimonials Section */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from families who have entrusted their children to our care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                  alt="Parent"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emily Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Parent of Alex, 4 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The staff at Sunshine Daycare has been incredible. My son has
                flourished socially and academically since enrolling. I
                appreciate the regular updates and photos they share throughout
                the day."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                  alt="Parent"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">
                    Parent of Sophia, 3 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We tried several daycares before finding Sunshine, and the
                difference is remarkable. The curriculum is engaging, the
                facility is always clean, and the teachers genuinely care about
                each child's development."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Parent"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Thompson</h4>
                  <p className="text-sm text-gray-500">
                    Parent of Ethan, 2 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a first-time parent, I was nervous about daycare, but the
                team at Sunshine made the transition seamless. They took the
                time to understand my son's needs and preferences, making him
                feel comfortable from day one."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sunshine Daycare</h3>
              <p className="mb-4">
                Providing quality childcare services since 2010.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Enrollment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Infant Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Toddler Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Preschool
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Pre-Kindergarten
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    After School Care
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">123 Sunshine Avenue</p>
                <p className="mb-2">Anytown, ST 12345</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p className="mb-2">Email: info@sunshinedaycare.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Sunshine Daycare. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
