
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Wanjira",
    title: "Small Business Owner",
    image: "/placeholder.svg",
    quote: "GELT helped me understand SACCOs and start investing with as little as Ksh 5,000. Kwa kweli, hii platform imeniwezesha kifedha!",
    rating: 5
  },
  {
    name: "John Kipkorir",
    title: "Software Engineer",
    image: "/placeholder.svg",
    quote: "I've learned more about the NSE in 3 months on GELT than I did in years of trying on my own. The community is incredibly supportive.",
    rating: 5
  },
  {
    name: "Amina Hassan",
    title: "University Student",
    image: "/placeholder.svg",
    quote: "Rafiki AI helped me create my first investment plan that fits with my student budget. Now I'm confidently growing my wealth while studying!",
    rating: 4
  },
  {
    name: "David Mutua",
    title: "Corporate Professional",
    image: "/placeholder.svg",
    quote: "I've diversified from just real estate to stocks and government bonds thanks to GELT's expert webinars. My portfolio is thriving!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-geltPurple-light/20 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Kenyan Investors Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied investors who are growing their wealth with GELT.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100 relative">
            <div className="absolute top-6 right-6 flex">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
              {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[activeIndex].rating} className="h-5 w-5 text-gray-200" />
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-geltPurple-light">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-gray-600">{testimonials[activeIndex].title}</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-geltPurple' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple"
              onClick={handleNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
