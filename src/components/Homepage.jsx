import { useState } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Rocket, Code2, Sparkles , Smartphone,Brain, Palette, Cloud, Settings, } from "lucide-react";
import { useEffect } from "react";

export default function Homepage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "Working with this team was a fantastic experience. The results exceeded our expectations.",
      name: "Client 1",
    },
    {
      id: 2,
      text: "Their professionalism and dedication are unmatched. Truly recommended!",
      name: "Client 2",
    },
    {
      id: 3,
      text: "Great communication, timely delivery, and quality work — what more can you ask for?",
      name: "Client 3",
    },
    {
      id: 4,
      text: "They helped us launch faster and more efficiently. We couldn’t be happier.",
      name: "Client 4",
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 2 >= testimonials.length ? 0 : prev + 2
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("contact-section");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("portfolio");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  const visibleTestimonials = testimonials.slice(current, current + 2);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message || "Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };
  const serviceData = [
    { title: "Web Development", icon: Code2 },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "AI & ML", icon: Brain },
    { title: "UI/UX Design", icon: Palette },
    { title: "Cloud Solutions", icon: Cloud },
    { title: "DevOps", icon: Settings },
  ];

  return (
    <div className="space-y-24">
      {/* Navbar */}
      
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 h-18">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <h1 className="text-3xl font-semibold text-amber-400">
          <span className="text-red-600">100</span>xTech
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-xl font-semibold">
          <a
            href="#hero"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Testimonials
          </a>
          <a
            href="#contact-section"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-red-600" size={24} />
          ) : (
            <Menu className="text-red-600" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-lg rounded-lg absolute top-16 left-0 w-full">
          <a
            href="#hero"
            className="block text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="block text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact-section"
            className="block text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>

      <div className="pt-2">
        {/* Hero Section */}
        <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Empowering Businesses <br />
          with <span className="text-yellow-300">Cutting-Edge Software</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90">
          Web, Mobile & AI solutions that drive <strong>innovation</strong> and growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
              size="lg"
              className="text-lg"
              onClick={scrollToQuote} // Call scrollToQuote function on click
            >
              <Rocket className="mr-2 h-5 w-5" /> Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg border-white text-white hover:bg-white hover:text-purple-700"
              onClick={scrollToWork} // Call scrollToWork function on click
            >
              <Sparkles className="mr-2 h-5 w-5" /> View Our Work
            </Button>
        </div>
      </motion.div>

      {/* Background icons */}
      <Code2 className="absolute top-10 left-10 text-white/10 w-32 h-32 rotate-12" />
      <Rocket className="absolute bottom-10 right-10 text-white/10 w-28 h-28 -rotate-12" />
    </section>

        {/* Services Section */}
        <section
  id="services"
  className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-purple-100 px-4 py-20"
>
  <h2 className="text-5xl font-bold mb-16 text-center text-gray-800">
    Our Core Services
  </h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
    {serviceData.map((service, i) => (
      <motion.div
        key={service.title}
        className="group relative transform transition-all duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.6 }}
      >
        <Card className="border-none bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl ring-1 ring-purple-200">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center items-center mb-6">
              <service.icon className="h-12 w-12 text-purple-600 transition-transform duration-300 group-hover:rotate-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Premium <span className="text-purple-600 font-medium">{service.title.toLowerCase()}</span> solutions tailored to
              drive innovation, scalability, and success.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>


<section id="portfolio" className="bg-gradient-to-br from-white to-purple-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      className="text-4xl font-bold mb-16 text-center text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Our Recent Work
    </motion.h2>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((id, index) => (
        <motion.div
          key={id}
          className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden mb-6">
            <img
              src={`https://via.placeholder.com/600x300?text=Project+${id}`}
              alt={`Project ${id}`}
              className="w-full h-48 object-cover rounded-xl group-hover:opacity-90 transition duration-500"
            />
            {/* Hover Effect on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition duration-300"></div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L4.5 12m0 0l5.25-5M4.5 12h15"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Project {id}
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            A dynamic and innovative solution built with the latest technologies to exceed business goals.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



<section id="testimonials" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 px-4">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl shadow-xl p-8 transform transition duration-500 hover:scale-105"
            >
              <p className="text-lg italic text-gray-700">
                “{testimonial.text}”
              </p>
              <div className="mt-6 text-right">
                <span className="font-semibold text-purple-600 text-lg">
                  — {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index * 2)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current / 2 === index ? "bg-purple-600 w-5" : "bg-gray-400"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>

        {/* Contact Section */}

        <section
  id="contact-section"
  className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 py-24"
>
  {/* Contact Box */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-7xl bg-white shadow-lg rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12"
  >
    {/* Left Info Panel */}
    <div className="space-y-6">
      <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
        Let's Create Something Incredible Together
      </h2>
      <p className="text-lg text-gray-600 max-w-md">
        Your next big idea starts here. Let’s connect, collaborate, and turn your vision into reality.
      </p>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-600" />
          <p className="text-lg">contact@100xtech.com</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-indigo-600" />
          <p className="text-lg">+91 95790 2411</p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-indigo-600" />
          <p className="text-lg">Pune, India</p>
        </div>
        <div className="pt-4 flex items-center gap-3">
          <Clock className="text-indigo-600" />
          <div>
            <p className="font-semibold">Working Hours</p>
            <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Form Panel */}
    <div className="space-y-6">
      <Input
        placeholder="Your Name"
        className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        type="email"
        placeholder="Your Email"
        className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Textarea
        placeholder="Your Message"
        rows={5}
        className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        onClick={handleSubmit}
      >
        ✉️ Send Message
      </Button>
    </div>
  </motion.div>
</section>


      </div>
    </div>
  );
}
