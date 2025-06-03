
import { TestimonialsSection as TestimonialsWithMarquee } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Mercy Wanjira",
      handle: "@mercywanjira",
      position: "Proud mum",
      avatar: "https://plus.unsplash.com/premium_photo-1705134291276-2774fe47c070?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "GELT helped me understand SACCOs and start investing with as little as Ksh 15,000 monthly. Kwa kweli, hii platform imeniwezesha kifedha kulea watoto wangu! #proudmum❤️"
  },
  {
    author: {
      name: "Vini👨🏽‍💼",
      handle: "@vini_corporate",
      position: "Corporate Professional",
      avatar: "https://images.unsplash.com/photo-1642165835095-528b68f00663?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "I've diversified from just real estate to stocks and government bonds thanks to the GELT resources. My portfolio is thriving!💹"
  },
  {
    author: {
      name: "John Kipkorir",
      handle: "@m_kulima👨🏽‍🌾",
      position: "M_kulima👨🏽‍🌾",
      avatar: "https://images.unsplash.com/photo-1628890922176-8b2ce7f6c15f?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "Platform ya GELT imenisadia kudiversify my portfolio. Nilikuwa na shamba, mimea na wanyama saa hii niko kwa Sacco na pia nimenunua stocks za kakuzi zinazonipa dividends kila mwaka. Nashukuru Jamii ya GELT kwa kunipa elimu ya kifedha."
  },
  {
    author: {
      name: "F_Kimari☪️",
      handle: "@f_kimari",
      position: "University Student",
      avatar: "https://plus.unsplash.com/premium_photo-1714211557218-ebcc5e2634f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    text: "Rafiki AI helped me create my first investment plan that fits with my student budget. Now I'm confidently growing my wealth while studying! #investmentbaddie💅🏽"
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
