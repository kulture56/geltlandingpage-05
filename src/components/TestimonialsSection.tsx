
import { TestimonialsSection as TestimonialsWithMarquee } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Margaret Wanjira",
      handle: "@mwanji",
      position: "Small Business Owner",
      avatar: "https://plus.unsplash.com/premium_photo-1705134291276-2774fe47c070?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "GELT helped me understand SACCOs and start investing with as little as Ksh 5,000. Kwa kweli, hii platform imeniwezesha kifedha!"
  },
  {
    author: {
      name: "John Kipkorir",
      handle: "@johntech",
      position: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1642165835095-528b68f00663?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "I've learned more about the NSE in 3 months on GELT than I did in years of trying on my own. The community is incredibly supportive."
  },
  {
    author: {
      name: "Amina Hassan",
      handle: "@ahassan",
      position: "University Student",
      avatar: "https://plus.unsplash.com/premium_photo-1714211557218-ebcc5e2634f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "Rafiki AI helped me create my first investment plan that fits with my student budget. Now I'm confidently growing my wealth while studying!"
  },
  {
    author: {
      name: "David Mutua",
      handle: "@dmutua",
      position: "Corporate Professional",
      avatar: "https://images.unsplash.com/photo-1628890922176-8b2ce7f6c15f?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "I've diversified from just real estate to stocks and government bonds thanks to GELT's expert webinars. My portfolio is thriving!"
  }
];

const TestimonialsSection = () => {
  return (
    <TestimonialsWithMarquee
      title="What our users are saying"
      description="GELT is empowering Kenyans from all walks of life to learn, invest, and grow wealth together."
      testimonials={testimonials}
    />
  );
};

export default TestimonialsSection;
