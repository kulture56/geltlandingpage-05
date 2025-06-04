
import { SocialLinks } from "@/components/ui/social-links";

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
  {
    name: "X",
    image: "/lovable-uploads/9cfe7264-0cd4-4841-9a7a-2d4c055029a5.png",
  },
  {
    name: "TikTok",
    image: "https://link-hover-lndev.vercel.app/tiktok.png",
  },
];

const floatingSocials = [
  {
    name: "Instagram",
    icon: "📷",
    url: "https://instagram.com/gelt_official",
    color: "hover:bg-pink-500"
  },
  {
    name: "LinkedIn", 
    icon: "💼",
    url: "https://linkedin.com/company/gelt",
    color: "hover:bg-blue-600"
  },
  {
    name: "X",
    icon: "𝕏",
    url: "https://x.com/__GELT__",
    color: "hover:bg-black"
  },
  {
    name: "TikTok",
    icon: "🎵", 
    url: "https://tiktok.com/@gelt_official",
    color: "hover:bg-red-500"
  }
];

const SocialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-geltPurple-light/10 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
            Join Our Community / Jiunge na Jumuiya Yetu
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-zinc-950 mb-2">
            Connect with thousands of Kenyan investors sharing insights, tips, and success stories. 
          </p>
          <p className="text-lg max-w-3xl mx-auto text-zinc-950">
            Unganisha na maelfu ya wawekezaji wa Kikinya wakishiriki maarifa, vidokezo, na hadithi za mafanikio.
          </p>
        </div>
        
        <div className="flex justify-center">
          <SocialLinks socials={socials} />
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-zinc-600">
            Follow us for daily financial tips and market updates | Tufuate kwa vidokezo vya kifedha na taarifa za masoko
          </p>
        </div>
      </div>

      {/* Floating Social Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {floatingSocials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${social.color}`}
          >
            {social.name === "X" ? (
              <img 
                src="/lovable-uploads/9cfe7264-0cd4-4841-9a7a-2d4c055029a5.png" 
                alt="X" 
                className="w-6 h-6"
              />
            ) : (
              social.icon
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
