import React, { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Phone, Mail, MapPin, Menu, X, Car, Plane, Train, Building, Star } from 'lucide-react';
import TaxiImage from './Firefly_A shot of a Taxi car designed for a website 112312.jpg';
// --- Custom SVG Icon for WhatsApp ---
const WhatsAppIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

// --- Helper Components (Icons) ---
const FeatureIcon = ({ icon, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900">
        {React.cloneElement(icon, { size: 24, "aria-hidden": "true" })}
      </div>
    </div>
    <div>
      {children}
    </div>
  </div>
);


// --- Main Application Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Services", "Coverage", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-400 tracking-wider">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Hafiz Taxi</a>
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
              className="hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="tel:+447947220736"
          className="hidden md:flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-transform transform hover:scale-105"
        >
          <Phone size={18} className="mr-2"/>
          Book Now
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="px-6 pt-2 pb-4 space-y-2 flex flex-col items-center">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
                className="block py-2 text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
             <a
              href="tel:+447947220736"
              className="mt-4 flex items-center justify-center w-full max-w-xs px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500"
            >
              <Phone size={18} className="mr-2"/>
              Call Now
            </a>
            <a
              href="https://wa.me/447947220736"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center w-full max-w-xs px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-600"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5"/>
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative text-white bg-gray-900 py-24 sm:py-32 lg:py-40">
       <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517673132405-a569e5d420bd?q=80&w=2070&auto=format=fit=crop')"}}></div>
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-shadow-lg">
          Your Reliable Ride in <span className="text-yellow-400">Swanley & Beyond</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Prompt, professional, and safe taxi services, available whenever you need us. Experience the difference with Hafiz Taxi.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+447947220736"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            <Phone className="mr-3" />
            Call to Book
          </a>
          <a
            href="https://wa.me/447947220736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="mr-3 h-6 w-6" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-yellow-400">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The Driver You Can Trust</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hafiz Taxi is a premier, independent taxi service based in Swanley, founded by me, Abdul Hafiz. With extensive knowledge of the local roads and a commitment to exceptional customer service, my goal is to provide you with a safe, comfortable, and timely journey every time.
            </p>
             <p className="mt-4 text-lg leading-8 text-gray-300">
              I take pride in maintaining a clean and modern vehicle, ensuring your ride is always a pleasant one. Whether you're heading to the airport, a business meeting, or just across town, you can rely on Hafiz Taxi for a professional experience.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-3 items-center">
                <MapPin className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                <span>Based in Swanley, BR8 8JD</span>
              </div>
               <div className="flex gap-x-3 items-center">
                <Star className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                <span>5-Star Rated Professional Service</span>
              </div>
            </dl>
          </div>
          <div className="mt-12 lg:mt-0">
             <img
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              src={TaxiImage}
              alt="Professional yellow taxi cab for Hafiz Taxi service"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    { name: 'Airport Transfers', description: 'Stress-free journeys to all major London airports including Heathrow, Gatwick, Stansted, Luton, and City Airport.', icon: <Plane /> },
    { name: 'Station Connections', description: 'Reliable pickups and drop-offs at local and major train stations, including Dartford and Swanley Station.', icon: <Train /> },
    { name: 'Local Journeys', description: 'Quick and efficient rides for your daily needs around Dartford, Bexley, and the surrounding areas.', icon: <Car /> },
    { name: 'Corporate Travel', description: 'Professional and punctual service for your business travel needs. Arrive at your meetings on time and in style.', icon: <Building /> },
  ];

  return (
    <section id="services" className="bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">How We Can Help You</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-400">
            We offer a comprehensive range of taxi services to meet your transportation needs, ensuring reliability and comfort.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {servicesList.map((service) => (
            <FeatureIcon key={service.name} icon={service.icon}>
              <h3 className="text-lg font-semibold leading-7 text-white">{service.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-400">{service.description}</p>
            </FeatureIcon>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoverageArea = () => {
    return (
        <section id="coverage" className="bg-gray-800 py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="lg:order-last">
                        <h2 className="text-base font-semibold leading-7 text-yellow-400">Our Coverage</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Serving Swanley and Surrounding Areas</p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We are based in Swanley and proudly serve an extensive area covering all local towns, major London airports, and key destinations across the South East.
                        </p>
                        <ul className="mt-6 list-disc list-inside text-gray-300 space-y-2">
                            <li>Central London & City</li>
                            <li>Dartford, Bexley & Bromley</li>
                            <li>Gatwick & Heathrow Airports</li>
                            <li>Ebbsfleet & Ashford International</li>
                            <li>And everywhere in between!</li>
                        </ul>
                    </div>
                    <div className="mt-10 lg:mt-0 h-96 md:h-full min-h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39804.20577534442!2d0.1450682126220678!3d51.3948332128825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9a6b32470c1%3A0x463935213b3b28f3!2sSwanley%20BR8%208JD%2C%20UK!5e0!3m2!1sen!2sus!4v1678886400000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Coverage Map for Hafiz Taxi"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', pickup: '', dropoff: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Deployed Google Script URL
        const apiEndpoint = 'https://script.google.com/macros/s/AKfycbxO-eTWRYzoHSD_tRtxl-JfdDYpO7d0bF47QEG35iKRkhKa9V5NexasZpFfKX2BM97aYg/exec'; // Ensure this is your latest deployment URL

        try {
            // **CHANGE HERE:** We send the data as text, but keep the JSON structure.
            // This is a more compatible method for Google Apps Script.
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                mode: 'no-cors', // Important for handling Google Script's response
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8', // Send as plain text
                },
                body: JSON.stringify(formData), // The data is still a JSON string
            });

            // NOTE: Because of 'no-cors', we can't read the response directly.
            // We will assume success if the request doesn't throw an error.
            
            toast.success('Your quote request has been sent successfully!', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            });

            setFormData({ name: '', email: '', phone: '', pickup: '', dropoff: '', message: '' });

        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Could not send booking. Please call us directly.', {
              position: "bottom-center",
              autoClose: 7000,
              theme: "dark",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* The rest of your form's JSX remains exactly the same... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-300">Full Name</label>
                    <div className="mt-2">
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-300">Phone Number</label>
                    <div className="mt-2">
                        <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email Address</label>
                <div className="mt-2">
                    <input type="email" name="email" id="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"/>
                </div>
            </div>
             <div>
                <label htmlFor="pickup" className="block text-sm font-medium leading-6 text-gray-300">Pickup Location</label>
                <div className="mt-2">
                    <input type="text" name="pickup" id="pickup" required value={formData.pickup} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" placeholder="e.g., The Swan pub or BR8 8JD"/>
                </div>
            </div>
             <div>
                <label htmlFor="dropoff" className="block text-sm font-medium leading-6 text-gray-300">Drop-off Location</label>
                <div className="mt-2">
                    <input type="text" name="dropoff" id="dropoff" required value={formData.dropoff} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" placeholder="e.g., Gatwick Airport or a postcode"/>
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-300">Additional Notes</label>
                <div className="mt-2">
                    <textarea name="message" id="message" rows="3" value={formData.message} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" placeholder="e.g., Number of passengers, luggage, etc."></textarea>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
        </form>
    );
};

const Contact = () => {
  return (
    <section id="contact" className="relative isolate bg-gray-900 py-20 sm:py-24">
       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="max-w-xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
                For the fastest response and immediate bookings, please call us directly. For quotes and other inquiries, feel free to call, email, or use the contact form.
            </p>
            <div className="mt-8 space-y-6 text-lg">
                <a href="tel:+447947220736" className="flex items-center gap-x-4 text-white hover:text-yellow-400 transition-colors">
                    <Phone className="h-7 w-7 flex-none" aria-hidden="true" />
                    <span className="font-semibold">+44 7947 220736</span>
                </a>
                 <a href="mailto:hafiztaxi8@gmail.com" className="flex items-center gap-x-4 text-white hover:text-yellow-400 transition-colors">
                    <Mail className="h-7 w-7 flex-none" aria-hidden="true" />
                    <span className="font-semibold">hafiztaxi8@gmail.com</span>
                </a>
                <a href="https://wa.me/447947220736" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-4 text-white hover:text-yellow-400 transition-colors">
                    <WhatsAppIcon className="h-7 w-7 flex-none" />
                    <span className="font-semibold">Chat on WhatsApp</span>
                </a>
                 <div className="flex items-center gap-x-4 text-white">
                    <MapPin className="h-7 w-7 flex-none" aria-hidden="true" />
                    <span className="font-semibold">Based in Swanley, BR8 8JD</span>
                </div>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-800 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-white">Send us a message</h3>
              <ContactForm />
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto py-8 px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Hafiz Taxi. All rights reserved.</p>
        <p className="text-sm mt-2">Professional and Reliable Taxi Service in Swanley & Surrounding Areas</p>
      </div>
    </footer>
  );
};


// The main App component that ties everything together.
export default function App() {
  // Add a simple effect to improve accessibility and styling on load
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.className = 'bg-gray-900 antialiased';

    // Inject react-toastify CSS via a link tag to avoid build errors
    const toastifyCssId = 'toastify-css';
    if (!document.getElementById(toastifyCssId)) {
      const link = document.createElement('link');
      link.id = toastifyCssId;
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/react-toastify/9.1.3/ReactToastify.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CoverageArea />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
