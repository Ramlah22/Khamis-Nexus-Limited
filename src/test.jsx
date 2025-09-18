import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "DINH VAN THACH",
      position: "Developer",
      message: "Great work, very professional!",
      avatar: "DT",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
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
      avatar: formData.name.charAt(0) + formData.name.charAt(1), // initials
    };

    setTestimonials([newTestimonial, ...testimonials]); // add to list
    setFormData({ name: "", email: "", position: "", message: "" });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <i className="bx bxs-comment-detail text-blue-600"></i> Testimonials
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
        >
          <i className="bx bx-plus"></i> Add Testimonial
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="space-y-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-6"
          >
            <p className="text-gray-700 dark:text-gray-200 mb-4">“{t.message}”</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Share Your Testimonial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position (CEO, Developer, Designer, etc.)"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Share your experience..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              ></textarea>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
