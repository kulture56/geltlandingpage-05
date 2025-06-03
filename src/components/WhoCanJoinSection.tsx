
import { ImageSwiper } from "@/components/ui/image-swiper";

const WhoCanJoinSection = () => {
  const imageUrls = "/lovable-uploads/d2d32bef-d469-443a-9798-200eaa5693b1.png,/lovable-uploads/ca7809da-dcf4-42a7-b28c-bdd2b844c00d.png,/lovable-uploads/6844d524-f352-40ef-b230-11fe9c3d7db0.png,/lovable-uploads/5983eefc-e26a-42a5-98e2-aef3681325a3.png,/lovable-uploads/6406780f-4b33-459d-bb47-e102a64458ed.png";

  const titles = [
    "Entrepreneur",
    "Mkulima", 
    "Daktari",
    "Student",
    "Business lady"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who can join <span className="text-geltPurple">GELT</span>?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image Swiper */}
          <div className="flex justify-center">
            <div className="relative">
              <ImageSwiper 
                images={imageUrls} 
                cardWidth={280}
                cardHeight={380}
                className="mx-auto"
              />
              {/* Title overlay */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-geltPurple">
                  <h3 className="text-geltPurple font-bold text-lg text-center">
                    {titles[0]}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                GELT aims to bridge the financial literacy gaps among Kenyans whoever, wherever they are. 
                To equip Kenyans with the tools, resources and provide education to build wealth for their 
                future generations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {titles.map((title, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-geltPurple transition-colors">
                  <h4 className="text-geltPurple font-semibold text-center">{title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
