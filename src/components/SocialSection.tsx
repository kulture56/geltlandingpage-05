
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
    image: "https://link-hover-lndev.vercel.app/twitter.png",
  },
  {
    name: "TikTok",
    image: "https://link-hover-lndev.vercel.app/tiktok.png",
  },
];

const SocialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-geltPurple-light/10">
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
    </section>
  );
};

export default SocialSection;
