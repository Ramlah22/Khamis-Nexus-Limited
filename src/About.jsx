import bg4 from "../public/assets/bg4.jpeg";
import bg5 from "../public/assets/bg5.jpeg";
import "boxicons/css/boxicons.min.css";
import './index.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

     useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // whether animation should happen only once
      easing: "ease-in-out", // animation style
    });
  }, []);
  
  return (
    <section id="about" className=" bg-gray-50 dark:bg-gray-800">
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
        <div data-aos="fade-right" data-aos-duration="900" className="py-20 pl-6">
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

        <div className="grid grid-cols-2 gap-4 md:pl-14 pl-8 md:pr-0 pr-8 md:pt-36 pb-10" data-aos="fade-left" data-aos-duration="900">
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
  );
}
