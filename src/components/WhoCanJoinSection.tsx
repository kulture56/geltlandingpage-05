
import { ImageSwiper } from "@/components/ui/image-swiper";

const WhoCanJoinSection = () => {
  const imageUrls = "/lovable-uploads/9cfe7264-0cd4-4841-9a7a-2d4c055029a5.png,/lovable-uploads/b28ee87a-6a88-4654-8e84-54c5547fd639.png,/lovable-uploads/70006e57-f90a-4e56-84c9-52e2ddea1a36.png,/lovable-uploads/c34b205b-4aed-44a6-b1f1-164a45ecca02.png,/lovable-uploads/5380ef31-c511-4099-9bc5-6315dc9febbc.png,/lovable-uploads/1c482811-dc25-4022-893a-ff02bb504955.png,/lovable-uploads/6fb5031a-4063-4279-9745-3ecdff7febff.png,/lovable-uploads/9707ef55-87d2-4b3d-9093-0ed662c4de6d.png,/lovable-uploads/2e645fb2-9f9a-4c15-9873-df0689ea5e1c.png,/lovable-uploads/3d1c248f-0e03-471c-8542-5decf9d2fcd5.png,/lovable-uploads/9b11f500-ee04-494f-bab8-2b5103aa38be.png,/lovable-uploads/457784e1-2281-49cc-85fc-6ea2cab816cf.png";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who can join GELT?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image Swiper */}
          <div className="flex justify-center">
            <ImageSwiper 
              images={imageUrls} 
              cardWidth={280} 
              cardHeight={380} 
              className="mx-auto"
              autoSwipe={true}
              autoSwipeInterval={2000}
            />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
