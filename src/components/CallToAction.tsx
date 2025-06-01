import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="bg-gradient-to-r from-geltPurple to-geltPurple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Kenyans who are learning, connecting, and growing their wealth together. <span className="font-medium">Tujenge Pamoja!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-800">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-purple-800 bg-slate-100">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;