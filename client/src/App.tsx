import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Truck,
  Stethoscope,
  Scissors,
  Dog,
  Users,
  Package,
  BadgeCheck,
  Timer,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedImage({
  src,
  alt,
  delay,
}: {
  src: string;
  alt: string;
  delay: number;
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className="rounded-lg w-full h-48 object-cover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    />
  );
}

function AnimatedTestimonial({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href");
      if (id?.startsWith("#")) {
        const element = document.querySelector(id);
        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Dog className="text-[#F4844C] h-8 w-8" />
            <span className="ml-2 text-2xl font-bold">Waggy</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#F4844C]">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#F4844C]">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-[#F4844C]">
              Services
            </a>
            <a href="#features" className="text-gray-600 hover:text-[#F4844C]">
              Features
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#F4844C]">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#F4844C]">
              Login
            </button>
            <button className="bg-[#F4844C] text-white px-6 py-2 rounded-full hover:bg-[#E67341] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <HeroSection>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Where Every <span className="text-[#F4844C]">Tail</span>
                <br />
                Finds Its Wag!
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                India's first comprehensive pet care platform for all your pet
                needs - from food and toys to veterinary services and grooming,
                delivered right to your doorstep.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#F4844C] text-white px-8 py-3 rounded-full hover:bg-[#E67341] transition-colors">
                  Explore Services
                </button>
                <button className="border-2 border-gray-300 text-gray-600 px-8 py-3 rounded-full hover:border-[#F4844C] hover:text-[#F4844C] transition-colors">
                  Learn More
                </button>
              </div>
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-4">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Trusted by</p>
                  <p className="text-[#F4844C]">10,000+ Pet Parents</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg"
                alt="Happy dogs"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Truck className="text-[#F4844C] mr-2" />
                <span>17-min delivery</span>
              </div>
            </div>
          </div>
        </HeroSection>
      </section>

      {/* About Waggy Section */}
      <section className="py-20 px-6 bg-white" id="about">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">About Waggy</h2>
            <p className="text-gray-600 text-center mb-16">
              Waggy is revolutionizing pet care in India by providing a
              comprehensive platform that connects pet owners with everything
              they need for their beloved companions.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-8">
                  We believe every pet deserves the best care possible. Our
                  mission is to make pet care accessible, affordable, and
                  convenient for all pet owners across India, whether they have
                  household companions or farm animals.
                </p>

                <h3 className="text-2xl font-bold mb-6">
                  What Makes Us Different
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg mt-1">
                      <Package className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Inclusive Platform</h4>
                      <p className="text-gray-600">
                        We cater to all types of pets - from dogs and cats to
                        cows and goats.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg mt-1">
                      <Truck className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Rapid Delivery</h4>
                      <p className="text-gray-600">
                        Emergency pet supplies delivered in just 17 minutes
                        through our Dunzo B2B partnership.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg mt-1">
                      <Users className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Doorstep Services</h4>
                      <p className="text-gray-600">
                        From veterinary check-ups to grooming, we bring
                        professional services to your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <AnimatedImage
                  src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg"
                  alt="Happy puppy"
                  delay={0.1}
                />
                <AnimatedImage
                  src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg"
                  alt="Cute puppy"
                  delay={0.2}
                />
                <AnimatedImage
                  src="https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg"
                  alt="Dog getting groomed"
                  delay={0.3}
                />
                <AnimatedImage
                  src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
                  alt="Cat being petted"
                  delay={0.4}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-center mb-12">
              From food delivery to medical care, we provide everything your pet
              needs to stay happy and healthy.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Package className="text-[#F4844C] w-8 h-8" />}
                title="Product Delivery"
                description="Get pet food, toys, medicines, and supplies delivered to your doorstep within minutes."
              />
              <ServiceCard
                icon={<Stethoscope className="text-[#F4844C] w-8 h-8" />}
                title="Veterinary Services"
                description="Book on-site veterinary consultations, health check-ups, vaccinations, and medical procedures."
              />
              <ServiceCard
                icon={<Scissors className="text-[#F4844C] w-8 h-8" />}
                title="Grooming Services"
                description="Professional grooming including baths, haircuts, nail trimming, and spa treatments at home."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Discover what makes Waggy the most comprehensive pet care platform
              in India.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <FeatureItem
                  icon={<Timer className="text-[#F4844C] w-6 h-6" />}
                  title="Rapid Delivery"
                  description="Essential pet supplies delivered in just 17 minutes through our Dunzo B2B partnership."
                />
                <FeatureItem
                  icon={<Users className="text-[#F4844C] w-6 h-6" />}
                  title="Comprehensive Care"
                  description="From food and toys to specialized medical services, we provide everything your pet needs."
                />
                <FeatureItem
                  icon={<Package className="text-[#F4844C] w-6 h-6" />}
                  title="Affordable Pricing"
                  description="We partner with local businesses to ensure competitive pricing."
                />
                <FeatureItem
                  icon={<BadgeCheck className="text-[#F4844C] w-6 h-6" />}
                  title="Government Registered"
                  description="We operate with all necessary certifications and registrations."
                />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Revolutionizing Pet Care in India
                </h3>
                <p className="text-gray-600 mb-8">
                  Waggy is transforming how pet owners access care for their
                  beloved companions. Our platform integrates cutting-edge
                  technology with local partnerships.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <span className="text-[#F4844C] mr-2">✓</span>
                    Real-time order tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-[#F4844C] mr-2">✓</span>
                    AI-driven recommendations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-[#F4844C] mr-2">✓</span>
                    Home-based veterinary care
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Join thousands of happy pet owners who trust Waggy for all their
              pet care needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedTestimonial delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                      alt="Priya Singh"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">Priya Singh</h3>
                      <p className="text-gray-600 text-sm">Dog Parent</p>
                    </div>
                  </div>
                  <div className="flex text-[#F4844C] mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600">
                    "The 17-minute delivery saved my puppy when he needed urgent
                    medication. The vet consultation was professional and
                    thorough. Waggy has made pet care so convenient!"
                  </p>
                </div>
              </AnimatedTestimonial>

              <AnimatedTestimonial delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg"
                      alt="Rahul Mehta"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">Rahul Mehta</h3>
                      <p className="text-gray-600 text-sm">Cat Parent</p>
                    </div>
                  </div>
                  <div className="flex text-[#F4844C] mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600">
                    "The grooming service was exceptional. The groomer was
                    patient with my anxious cat and did a wonderful job. The
                    prices are much better than what I was paying before!"
                  </p>
                </div>
              </AnimatedTestimonial>

              <AnimatedTestimonial delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                      alt="Anita Sharma"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">Anita Sharma</h3>
                      <p className="text-gray-600 text-sm">Farm Owner</p>
                    </div>
                  </div>
                  <div className="flex text-[#F4844C] mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600">
                    "Finally, a service that understands farm animals too! The
                    veterinary care for my goats was excellent, and the regular
                    feed delivery has made my life so much easier."
                  </p>
                </div>
              </AnimatedTestimonial>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F4844C] py-20 px-6">
        {/* <AnimatedSection> */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Waggy Family
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for pet care tips, exclusive offers, and
            updates.
          </p>
          <form className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none"
            />
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        {/* </AnimatedSection> */}
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or want to partner with us?
                  Reach out to our team and we'll get back to you as soon as
                  possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg">
                      <MapPin className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg">
                      <Mail className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600">support@waggy.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-[#FFF0E6] p-3 rounded-lg">
                      <Phone className="text-[#F4844C] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">+91-9876543210</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map(
                      (Icon, index) => (
                        <a
                          key={index}
                          href="#"
                          className="bg-[#FFF0E6] p-3 rounded-lg hover:bg-[#F4844C] group transition-colors"
                        >
                          <Icon className="w-5 h-5 text-[#F4844C] group-hover:text-white" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4844C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4844C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4844C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4844C] focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4844C] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F4844C] text-white py-3 rounded-lg hover:bg-[#E67341] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Dog className="text-[#F4844C] h-8 w-8" />
                <span className="ml-2 text-2xl font-bold text-white">
                  Waggy
                </span>
              </div>
              <p className="mb-6">
                India's first comprehensive pet care platform providing
                everything from food delivery to medical services for all types
                of pets.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-[#F4844C] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Product Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Veterinary Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Grooming Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Pet Walking & Sitting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4844C] transition-colors"
                  >
                    Farm Animal Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F4844C]" />
                  Chennai, Tamil Nadu, India
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#F4844C]" />
                  support@waggy.in
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#F4844C]" />
                  +91-9876543210
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>
                © 2025 Waggy. All rights reserved. Founded by R Abhinav
                Vinaayak.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#F4844C] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#F4844C] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#F4844C] transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="bg-[#FFF9F5] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href="#"
        className="text-[#F4844C] mt-4 inline-block hover:text-[#E67341]"
      >
        Learn more →
      </a>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="bg-[#FFF9F5] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;
