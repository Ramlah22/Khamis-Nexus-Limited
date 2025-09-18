import { useState, useEffect } from "react";
import logo from "../public/assets/logo.png";
import "boxicons/css/boxicons.min.css";
import cardImg1 from "../public/assets/bg1.jpg";
import cardImg2 from "../public/assets/bg2.jpg";
import bg6 from "../public/assets/bg6.jpeg";
import bg4 from "../public/assets/bg4.jpeg";
import bg5 from "../public/assets/bg5.jpeg";
import CurrencyConverter from './components/CurrencyConverter.jsx'
import ShippingEstimator from './components/ShippingEstimator.jsx'
import FAQ from './components/FAQ.jsx'
import AOS from "aos";
import "./index.css"
import "aos/dist/aos.css"; 


export default function Homepage() {



  const images = [cardImg1, cardImg2, bg4, bg5, bg6, bg4, cardImg2];
  const [startIndex, setStartIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Manual next/prev
  const handleNext = () => {
    if (startIndex < images.length - 4) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // loop back to start
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(images.length - 4); // loop to last set
    }
  };

  // Auto-slide (carousel effect)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, [startIndex]);

  // Lightbox controls
  const openLightbox = (index) => {
    setLightboxIndex(startIndex + index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const lightboxNext = () => {
    if (lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else {
      setLightboxIndex(0); // loop
    }
  };

  const lightboxPrev = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else {
      setLightboxIndex(images.length - 1); // loop
    }
  };


  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 

  const cards = [
    {
      img: cardImg1,
      text: "We secure currency exchange and reliable cargo logistics",
    },
    {
      img: cardImg2,
      text: "Fast, safe delivery and trusted global exchange partners",
    },
  ];

    useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // whether animation should happen only once
      easing: "ease-in-out", // animation style
    });
  }, []);
  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    const [testimonials, setTestimonials] = useState([
    {
      name: "Chinedu Okafor",
      position: "Business Owner",
      message:
        "Khamis Nexus Limited has been a game changer for my import business. Their currency exchange is fast and reliable, and the cargo logistics always arrive on time. I now trade with full confidence.",
      avatar: "CO",
      rating: 5,
    },
    {
      name: "Aisha Bello",
      position: "Entrepreneur",
      message:
        "I appreciate their honesty and professionalism. With Khamis Nexus Limited, I never have to worry about hidden charges or delays. They put the customer first and it really shows.",
      avatar: "AB",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      position: "Freelancer",
      message:
        "As someone trading across borders, I needed a service that was both transparent and secure. Khamis Nexus Limited delivered exactly that. Their team is efficient and supportive.",
      avatar: "MJ",
      rating: 5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
    rating: 5,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTestimonial = {
      name: formData.name,
      position: formData.position,
      message: formData.message,
      avatar:
        formData.name.charAt(0).toUpperCase() +
        (formData.name.charAt(1) || "").toUpperCase(),
      rating: formData.rating,
    };

    setTestimonials([newTestimonial, ...testimonials]); // add new to top
    setFormData({ name: "", email: "", position: "", message: "", rating: 5 });
    setShowForm(false);
  };



      const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when scrolled past 300px
  window.onscroll = () => {
    setShowButton(window.scrollY > 300);
  };



  return (
    <>

    <div data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-delay="0" >

      {/* Home */}
       <section
      id="home"
      data-aos="fade-down"
      data-aos-duration="1000"
      className="relative h-[700px] w-full flex flex-col items-center justify-start text-white overflow-hidden overflow-x-hidden"
      style={{
        backgroundImage: "url('/assets/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <header 
       data-aos="fade-down"
        data-aos-delay="300"
      className="sticky top-6 z-50 mx-auto flex items-center justify-between h-18 w-[70%] 
        bg-black/20 backdrop-blur-md px-6 shadow-lg rounded-lg border border-white/10">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            data-aos="zoom-in" data-aos-delay="400"
            className="w-[60px] h-[60px] m-2 bg-slate-200 rounded flex justify-center items-center"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-medium" data-aos="fade-left" data-aos-delay="500">
         <a href="#home"  data-aos="fade-right" data-aos-delay="600"><li className="cursor-pointer hover:text-blue-500">Home</li></a> 
          <a href="#about" data-aos="fade-right" data-aos-delay="700"><li className="cursor-pointer hover:text-blue-500"  >About</li></a>
          <a href="#services" data-aos="fade-right" data-aos-delay="800" ><li className="cursor-pointer hover:text-blue-500" >Services</li></a>
         <a href="#testimonials" data-aos="fade-right" data-aos-delay="900"><li className="cursor-pointer hover:text-blue-500" >Testimonials</li></a> 
        <a href="#gallery"  data-aos="fade-right" data-aos-delay="1000"> <li className="cursor-pointer hover:text-blue-500">Gallery</li></a>
        <a href="#contact"   data-aos="fade-right" data-aos-delay="1100"><li className="cursor-pointer hover:text-blue-500">Contact</li></a>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          data-aos="zoom-in" data-aos-delay="1200"
          className="hidden md:flex ml-6 px-4 py-2 rounded-lg bg-gray-700/70 text-white hover:bg-gray-600/70 transition items-center space-x-2"
        >
          <i className={darkMode ? "bx bx-sun text-xl" : "bx bx-moon text-xl"}></i>
          <span>{darkMode ? "Light" : "Dark"}</span>
        </button>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          data-aos="fade-left" data-aos-delay="1300"
        >
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div 
         data-aos="fade-down"
          data-aos-delay="1400"
           className="absolute top-24 z-50 w-[70%] bg-black/20 backdrop-blur-md rounded- shadow-lg p-6 flex flex-col space-y-4 text-white md:hidden">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
          <a href="#gallery" className="hover:text-blue-400">Gallery</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 px-4 py-2 rounded-lg bg-gray-700/70 text-white hover:bg-gray-600/70 transition flex items-center space-x-2"
          >
            <i className={darkMode ? "bx bx-sun text-xl" : "bx bx-moon text-xl"}></i>
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div data-aos="fade-right" data-aos-delay="1500" className="relative z-10 mt-10 grid gap-20 text-center px-4 md:grid-cols-2">
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold md:mb-4 mb-2 md:mt-7 mt-10 ml-8 md:ml-10 text-gray-200 text-left"
          >
           <span data-aos="zoom-in" data-aos-delay="1600"> Your Gateway</span>
            <span className="text-brand inline-block" data-aos="fade-up" data-aos-delay="1700"> to Global Trade</span> &
            <span data-aos="fade-up" data-aos-delay="1800">Exchange</span>
            <span  data-aos="fade-up" data-aos-delay="1900">Fast, secure currency exchange and reliable cargo logistics for
            businesses across Nigeria and worldwide.</span>
          </h1>
        </div>

        
        <div   
        data-aos="zoom-in-up"
          data-aos-delay="2000"
          className="mt-2 md:mt-96 bg-black/20 backdrop-blur-md h-40 shadow-lg  md:w-[70%] w-[90%] rounded-lg bnmnmorder border-white/10 flex items-center mx-auto">
          <img
            src={cards[cardIndex].img}
            alt=""
            className="md:w-[40%] w-[30%]  p-3 rounded-2xl"
             data-aos="flip-left"
            data-aos-delay="400"
          />
          <div className="ml-2 flex flex-col text-white">
            <p className="mr-4">{cards[cardIndex].text}</p>
            <div className="mt-2 flex space-x-4">
              <button
                className="px-2 ml-48 md:ml-28 py-2 mt-4 rounded-lg bg-gray-700/70 hover:bg-gray-600/70 flex items-center"
                onClick={() => setCardIndex(1)}
                disabled={cardIndex === 1}
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <i className="bx bx-chevron-left text-2xl"></i>
              </button>
              <button
                className="px-2 py-2 mt-4 rounded-lg bg-gray-700/70 hover:bg-gray-600/70 flex items-center"
                onClick={() => setCardIndex(0)}
                disabled={cardIndex === 0}
                 data-aos="fade-left"
                data-aos-delay="1000"
              >
                <i className="bx bx-chevron-right text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About */}
      <section id="about" className=" bg-white dark:bg-gray-800">
          <div className="relative overflow-hidden bg-slate-300 dark:bg-slate-400 py-3">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium text-lg">
          <i className="bx bx-award text-yellow-500 text-xl"></i> We Give The Best
        </span>
        <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium text-lg">
          <i className="bx bx-shield text-green-600 text-xl"></i> Trusted & Transparent
        </span>
        <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium text-lg">
          <i className="bx bx-globe text-blue-600 text-xl"></i> Global Network
        </span>
        <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium text-lg">
          <i className="bx bx-bolt-circle text-yellow-500 text-xl"></i> Fast & Reliable
        </span>
        <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium text-lg">
          <i className="bx bx-user-check text-purple-600 text-xl"></i> Customer Focused
        </span>
      </div>
    </div>
    
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-18 items-center">
            <div data-aos="fade-right" data-aos-duration="1800" className="py-20 pl-6">
              <h2 className="text-5xl font-extrabold mb-6 pl-6 text-gray-800 dark:text-white">
                About <span className="text-blue-900 ">Us</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
                At <b className="text-blue-900">Khamis Nexus Limited</b>, we blend trusted{" "}
                <span className="font-semibold">money exchange services</span> with{" "}
                <span className="font-semibold">efficient cargo logistics</span>.  
                Our mission is to help you trade smarter, faster, and safer—with transparency and a customer-first mindset.
              </p>
    
             
              <ul className="mt-8 space-y-4 text-xl">
                <li className="flex items-center gap-3 group">
                  <i className="bx bx-shield text-blue-900 text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"></i>
                  <span className="group-hover:text-blue-900 dark:group-hover:text-blue-700">
                    Trusted & Transparent
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <i className="bx bx-globe text-blue-900 text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"></i>
                  <span className="group-hover:text-blue-900 dark:group-hover:text-blue-700">
                    Global Network
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <i className="bx bx-bolt-circle text-blue-900 text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"></i>
                  <span className="group-hover:text-blue-900 dark:group-hover:text-blue-900">
                    Fast & Reliable
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <i className="bx bx-user-check text-blue-900 text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"></i>
                  <span className="group-hover:text-blue-900 dark:group-hover:text-blue-900">
                    Customer Focused
                  </span>
                </li>
              </ul>
            </div>
    
            <div className="grid grid-cols-2 gap-4 md:pl-14 pl-8 md:pr-0 pr-8 md:pt-36 pb-10" data-aos="fade-left" data-aos-duration="1400">
              <img
                src={bg4}
                className="rounded-2xl shadow-xl h-56 w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <img
                src={bg5}
                className="rounded-2xl shadow-xl h-56 w-full object-cover mt-6 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>
         
         {/* Service */}
         <section id="services" className="w-full py-16 px-3 md:px-10 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
         <div className="text-center md:space-y-5 space-y-2 lg:px-40">
          <p className="text-2xl lg:text-4xl font-semibold" data-aos="fade-up">
            Our Services
          </p>
          <p className="font-normal md:text-xl text-gray-600 dark:text-gray-300" data-aos="zoom-up" data-aos-duration="1000">
            We provide secure financial solutions, trusted trade support, and reliable logistics to connect businesses globally.
          </p>
        </div>

        {/* Service One */}
    <div
      className="flex lg:flex-row justify-center shadow rounded-lg mt-10 dark:hover:shadow-2xl bg-gray-50 cursor-pointer hover:shadow-lg dark:bg-gray-900 md:p-7 p-5 items-center flex-col gap-5"
      data-aos="fade-right"
    >
      <div className="w-full space-y-3">
        <p className="font-semibold text-3xl flex items-center gap-2 py-2">
          <i className="bx bx-money text-gray-900"></i> Money Exchange
        </p>   
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Competitive rates, secure transactions, and multi-currency support for businesses and individuals.
        </p>
        <CurrencyConverter />
      </div>
    </div>

    {/* Service Two & Three */}
    <div className="md:gap-12 gap-8 grid grid-cols-1 lg:grid-cols-2 md:mt-16 mt-10">
      {/* Service Two */}
      <div
        className="flex justify-center shadow flex-col dark:hover:shadow-2xl bg-gray-50 cursor-pointer hover:shadow-lg dark:bg-gray-900 md:p-7 p-5 rounded-lg"
        data-aos="fade-left" data-aos-duration="1200"
      >
        <div className="space-y-3">
        <p className="font-semibold text-3xl flex items-center gap-2 py-2">
        <i className="bx bx-globe text-gray-900"></i> Global Trade Support
      </p>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Import/export facilitation, smooth international payments, and trade advisory for your business needs.
          </p>
          <FAQ small />
        </div>
      </div>

      {/* Service Three */}
      <div
        className="flex justify-center shadow flex-col dark:hover:shadow-2xl bg-gray-50 cursor-pointer hover:shadow-lg dark:bg-gray-900 md:p-7 p-5 rounded-lg"
        data-aos="fade-right" data-aos-duration="1200"
      >
        <div className="space-y-3">
       <p className="font-semibold text-3xl py-2 flex items-center gap-2">
      <i className="bx bxs-ship text-gray-900"></i> Cargo Logistics
    </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Air & sea freight, customs clearance, and door-to-door delivery to keep your goods moving safely.
          </p>
          <ShippingEstimator />
        </div>
      </div>
    </div>
          </div>

         </section>


          {/* Testimonials */}
          <div className="bg-white dark:bg-gray-800 py-16">
               <section id="testimonials" className="py-12 px-6 max-w-4xl mx-auto">
             {/* Heading */}
             <div data-aos="fade-down" data-aos-duration="1000" >
                <h2 className="text-4xl text-center font-bold text-gray-900 dark:text-white mb-2">
          What People Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Trusted by businesses and individuals who trade smarter, faster, and safer
          with Khamis Nexus Limited.
        </p>
             </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-aos="fade-right" data-aos-duration="800">
          <i className="bx bxs-comment-detail text-blue-900"></i> Testimonials
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          data-aos="fade-left" data-aos-duration="800"
        >
          <i className="bx bx-plus"></i> Add Testimonial
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="space-y-4" data-aos="fade-up" data-aos-duration="800">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-slate-700 shadow-md rounded-xl p-6"
          >
            <p className="text-gray-700 dark:text-gray-200 mb-4">“{t.message}”</p>

            {/* Stars */}
            <div className="flex text-yellow-500 mb-2">
              {[...Array(t.rating)].map((_, idx) => (
                <i key={idx} className="bx bxs-star"></i>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-900 text-white rounded-full font-bold">
                {t.avatar}
              </div>
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Share Your Testimonial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position (CEO, Developer, Designer, etc.)"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <textarea
                name="message"
                placeholder="Share your experience..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                required
              ></textarea>

              {/* Rating */}
              <div>
                <p className="mb-1 font-medium">Your Rating:</p>
                <div className="flex text-yellow-500 gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`bx ${
                        formData.rating >= star ? "bxs-star" : "bx-star"
                      } cursor-pointer`}
                      onClick={() =>
                        setFormData({ ...formData, rating: star })
                      }
                    ></i>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>


    {/* Gallery */}
    <section
      id="gallery"
      className="py-10 px-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      {/* Heading */}
      <h2 className="text-5xl text-center font-bold mb-20" data-aos="fade-up" data-aos-duration="1000" >Our Gallery</h2>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-1 md:left-[-3rem] z-10 dark:bg-slate-900 dark:hover:bg-slate-950 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-600"
          data-aos="fade-right" data-aos-duration="1000"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="1000">
          {images.slice(startIndex, startIndex + 4).map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img}
                alt={`Gallery ${startIndex + idx + 1}`}
                className="w-full h-40 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-[-3rem] z-10  dark:bg-slate-900 dark:hover:bg-slate-950 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-600"
          data-aos="fade-left" data-aos-duration="1000"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>

      {/* Lightbox Popup */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-500"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>

          {/* Left Navigation */}
          <button
            onClick={lightboxPrev}
            className="absolute left-4 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-600"
          >
            <i className="bx bx-chevron-left text-3xl"></i>
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`Gallery ${lightboxIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Right Navigation */}
          <button
            onClick={lightboxNext}
            className="absolute right-4 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-600"
          >
            <i className="bx bx-chevron-right text-3xl"></i>
          </button>
        </div>
      )}
    </section>
      
      {/* Contact */}
      <section id="contact" className="py-16 max-w-6xl mx-auto px-4">
  {/* Header */}
  <div className="text-center mb-16" data-aos="fade-up">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
      Contact Us
    </h2>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Have a question or need assistance? Get in touch with us—we’d love to hear
      from you.
    </p>
  </div>

  {/* Content Grid */}
  <div className="grid md:grid-cols-2 gap-12">
    {/* Left Side - Contact Info */}
    <div data-aos="fade-right" className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Get In Touch
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        We’d love to hear from you! Whether you have a question about our
        services, pricing, or anything else, our team is ready to answer all
        your questions.
      </p>

      <div className="space-y-3">
        <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
          <i className="bx bxs-phone-call text-brand text-xl"></i>
          <span>+234 703 535 8833</span>
        </p>
        <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
          <i className="bx bxs-envelope text-brand text-xl"></i>
          <span>khamisnexusltd@gmail.com</span>
        </p>
        <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
          <i className="bx bxs-map text-brand text-xl"></i>
          <span>Shop No. 47 Emirated Plaza Old Bukuru Park,
                 Jos, Plateau State.</span>
        </p>
      </div>

            <iframe
        className="w-full h-64 rounded-xl shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.507763168928!2d8.896432914476237!3d9.927413691173058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d36f3241b2c0f%3A0x646f44aa53a97615!2sEmirated%20Plaza%20Old%20Bukuru%20Park%2C%20Shop%20No.%2047%2C%20Jos%2C%20Plateau%20State!5e0!3m2!1sen!2sng!4v1695086954321!5m2!1sen!2sng"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>

    {/* Right Side - Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent!");
      }}
      data-aos="fade-left"
      className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Send Us a Message
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        Fill in the form below and we’ll get back to you as soon as possible.
      </p>

      {/* Name */}
      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-800 px-3">
        <i className="bx bxs-user text-gray-500 dark:text-gray-400 text-xl"></i>
        <input
          placeholder="Your Name"
          className="w-full px-3 py-3 bg-transparent focus:outline-none"
          required
        />
      </div>

      {/* Email */}
      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-800 px-3">
        <i className="bx bxs-envelope text-gray-500 dark:text-gray-400 text-xl"></i>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-3 bg-transparent focus:outline-none"
          required
        />
      </div>

      {/* Message */}
      <div className="flex items-start border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-800 px-3">
        <i className="bx bxs-message-detail text-gray-500 dark:text-gray-400 text-xl mt-3"></i>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-3 py-3 bg-transparent focus:outline-none"
          required
        ></textarea>
      </div>

            {/* Button */}
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand bg-blue-900 text-white rounded-lg font-medium hover:bg-brand/90 transition-all duration-300 group">
        <i className="bx bxs-send text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
        Send Message
      </button>
    </form>
  </div>
</section>
          </div>

      {/* Footer */}
    <footer className="bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img
            src={logo}
            alt="logo"
            className="w-[80px] h-[60px] rounded flex justify-center items-center"
          />
             <h4 className="text-xl font-bold text-gray-600 dark:text-white mt-4">Khamis Nexus </h4>
          </div>      
          <p className="dark:text-gray-400 text-gray-600">
            Trusted in money exchange and reliable cargo services across Nigeria.  
            We are committed to transparency, security, and speed in every transaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="dark:hover:text-white hover:text-gray-700 transition ">Home</a></li>
            <li><a href="#services" className="dark:hover:text-white hover:text-gray-700 transition">Services</a></li>
            <li><a href="#testimonials" className="dark:hover:text-white hover:text-gray-700 transition">Testimonials</a></li>
            <li><a href="#gallery" className="dark:hover:text-white hover:text-gray-700 transition">Gallery</a></li>
            <li><a href="#contact" className="dark:hover:text-white hover:text-gray-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <i className="bx bx-money text-brand"></i> Money Exchange
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bx-package text-brand"></i> Cargo Delivery
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bx-globe text-brand"></i> International Trade
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bx-check-shield text-brand"></i> Secure Transactions
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">Connect With Us</h4>
          <p className="flex items-center gap-2">
            <i className="bx bxs-phone-call text-brand text-lg"></i> +234 703 535 8833
          </p>
          <p className="flex items-center gap-2">
            <i className="bx bxs-envelope text-brand text-lg"></i> khamisnexusltd@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <i className="bx bxs-map text-brand text-lg"></i> Shop No. 47 Emirated Plaza Old Bukuru Park,
                 Jos, Plateau State.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" aria-label="Facebook" className="dark:hover:text-white hover:text-gray-700 transition">
              <i className="bx bxl-facebook text-2xl"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="dark:hover:text-white hover:text-gray-700 transition">
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="dark:hover:text-white hover:text-gray-700 transition">
              <i className="bx bxl-instagram text-2xl"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="dark:hover:text-white hover:text-gray-700 transition">
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-900 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Khamis Nexus Limited. All rights reserved.
        </div>
      </div>
    </footer>
          
    </div>
   


    {/* BackToTop Button */}

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '4px 12px',
            fontSize: '20px',
           backgroundColor: isHovered ? '#034078' : '#023059',
            color: 'white',
            border: 'none',
            borderRadius: '10%',
            cursor: 'pointer',
            transform: 'rotate(-90deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease',
          }}
          aria-label="Back to top"
        >
          &gt;
        </button>
      )}
    

      
    </>   
  );
}
