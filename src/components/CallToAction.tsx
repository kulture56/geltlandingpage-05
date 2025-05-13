
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="bg-gradient-to-r from-geltPurple to-geltPurple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
              <p className="text-lg md:text-xl mb-0 opacity-90">
                Join thousands of Kenyans who are learning, connecting, and growing their wealth together. 
                <span className="font-medium block mt-2">Tujenge Pamoja!</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-geltPurple hover:bg-gray-100 px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <span>Kenyan Investors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <span>Investment Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <span>AI Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">KSh</span>
                </div>
                <span>Local Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
