import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import confetti from "canvas-confetti";
export interface NewsletterSignupProps {
  onSubmit: (email: string) => Promise<void>;
  className?: string;
}
export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmit,
  className = ""
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(email);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6
        }
      });
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className={`bg-geltPurple/10 border border-geltPurple/20 rounded-lg p-6 max-w-xl mx-auto ${className}`}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? <motion.form key="form" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-start justify-center gap-1 flex-col overflow-y-hidden">
              <motion.h2 className="text-2xl font-bold text-gray-800" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
                Subscribe to our newsletter
              </motion.h2>
              <motion.p initial={{
            opacity: 0,
            y: 10,
            filter: "blur(3px)"
          }} animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }} transition={{
            delay: 0.4
          }} className="text-sm text-zinc-950">
                Stay up to date with our latest news and investment opportunities.
              </motion.p>
            </div>
            <div className="space-y-2">
              <motion.label initial={{
            opacity: 0,
            filter: "blur(3px)"
          }} animate={{
            opacity: 1,
            filter: "blur(0px)"
          }} transition={{
            delay: 0.6
          }} className="font-medium text-sm text-gray-700" htmlFor="email">
                Email address
              </motion.label>
              <motion.div className="flex gap-2" initial={{
            opacity: 0,
            filter: "blur(3px)"
          }} animate={{
            opacity: 1,
            filter: "blur(0px)"
          }} transition={{
            delay: 0.7
          }}>
                <input type="email" id="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md focus-visible:ring-0 focus-within:ring-0 focus:outline-geltPurple/30" />
                <button type="submit" disabled={isSubmitting} className="relative overflow-hidden text-sm flex items-center justify-center gap-2 px-4 py-2 bg-geltPurple text-white rounded-md hover:bg-geltPurple-600 transition-colors">
                  <motion.div key="default" initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="flex items-center">
                    <Send className="h-4 w-4" />
                    <span className="ml-2">Subscribe</span>
                  </motion.div>
                </button>
              </motion.div>
            </div>
            <AnimatePresence>
              {error && <motion.p className="text-red-500 text-sm" initial={{
            opacity: 0,
            y: 5
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -5
          }}>
                  {error}
                </motion.p>}
            </AnimatePresence>
          </motion.form> : <motion.div key="success" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0
      }} className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for subscribing!
            </h2>
            <p className="text-gray-600">
              We've sent a confirmation email to your inbox.
            </p>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default NewsletterSignup;