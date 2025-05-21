
import React from 'react';
import NewsletterSignup from './ui/newsletter-signup';

const NewsletterSection = () => {
  const handleNewsletterSubmit = async (email: string) => {
    // In a real application, you would send this to your API
    console.log('Newsletter subscription for:', email);
    
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our newsletter to receive the latest updates on investment opportunities, 
            market insights, and financial education resources.
          </p>
        </div>
        <NewsletterSignup onSubmit={handleNewsletterSubmit} />
      </div>
    </section>
  );
};

export default NewsletterSection;
