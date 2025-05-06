import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with this team was a game-changer for us! Their expertise and dedication made our home-buying experience seamless and enjoyable.",
      name: "John Doe",
      role: "Homeowner, Happy Client"
    },
    {
      quote: "Exceptional service from start to finish. We found our dream home faster than we expected thanks to their market knowledge.",
      name: "Sarah Williams",
      role: "First-time Buyer"
    },
    {
      quote: "The team went above and beyond to get us the best deal possible. Truly professional and caring service.",
      name: "Michael Chen",
      role: "Investor"
    },
    {
      quote: "After a bad experience with another agency, this team restored our faith in real estate professionals.",
      name: "Emma Rodriguez",
      role: "Happy Client"
    },
    {
      quote: "Their attention to detail and communication throughout the selling process was outstanding.",
      name: "David Kim",
      role: "Seller"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div 
      className="relative py-24 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmR1HcqOCFTGQGThIcmsY2ZNYoH_W7uwE_kQ&s')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">CLIENT TESTIMONIALS</h2>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <div className="text-center">
            <p className="text-xl md:text-2xl italic mb-8">"{testimonials[currentTestimonial].quote}"</p>
            <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
            <div className="text-blue-200">{testimonials[currentTestimonial].role}</div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;