import { ImageSwiper } from "@/components/ui/image-swiper";
const WhoCanJoinSection = () => {
  const imageUrls = "/lovable-uploads/6fb5031a-4063-4279-9745-3ecdff7febff.png,/lovable-uploads/9707ef55-87d2-4b3d-9093-0ed662c4de6d.png,/lovable-uploads/2e645fb2-9f9a-4c15-9873-df0689ea5e1c.png,/lovable-uploads/3d1c248f-0e03-471c-8542-5decf9d2fcd5.png,/lovable-uploads/9b11f500-ee04-494f-bab8-2b5103aa38be.png,/lovable-uploads/457784e1-2281-49cc-85fc-6ea2cab816cf.png";
  const titles = ["Entrepreneur", "Mkulima", "Daktari", "Student", "Business lady", "Familia"];
  return <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who can join ?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image Swiper */}
          <div className="flex justify-center">
            <ImageSwiper images={imageUrls} titles={titles} cardWidth={280} cardHeight={380} className="mx-auto" />
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
              {titles.map((title, index) => <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-geltPurple transition-colors">
                  <h4 className="text-geltPurple font-semibold text-center">{title}</h4>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhoCanJoinSection;