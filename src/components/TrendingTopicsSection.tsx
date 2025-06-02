
"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { TrendingUp } from "lucide-react";

const trendingTopics = [
  {
    name: "NSE Stock Picks",
    posts: 243,
    growth: "+12%",
    color: "emerald"
  },
  {
    name: "Crypto for Beginners", 
    posts: 198,
    growth: "+28%",
    color: "sky"
  },
  {
    name: "SACCO Dividends",
    posts: 175,
    growth: "+5%",
    color: "purple"
  },
  {
    name: "Real Estate Funds",
    posts: 132,
    growth: "+8%",
    color: "orange"
  },
  {
    name: "Treasury Bills",
    posts: 118,
    growth: "+16%",
    color: "pink"
  }
];

const TrendingTopicsSection = () => {
  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
              Trending Investment Topics
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-zinc-950">
              Discover what's hot in the Kenyan investment community right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trendingTopics.slice(0, 3).map((topic, index) => (
              <div key={index} className="h-[25rem] flex items-center justify-center">
                <PinContainer title={`Explore ${topic.name}`}>
                  <div className="flex flex-col p-6 tracking-tight text-slate-100/50 w-[18rem] h-[18rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <div className="text-xs text-slate-400">Trending Now</div>
                    </div>

                    {/* Topic Name */}
                    <div className="text-xl font-bold text-slate-100 mb-6">
                      #{topic.name}
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-sky-400">{topic.posts}</div>
                        <div className="text-sm text-slate-400">Active Posts</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-emerald-400">{topic.growth}</div>
                        <div className="text-sm text-slate-400">Growth This Week</div>
                      </div>

                      {/* Activity Indicator */}
                      <div className="relative h-12 overflow-hidden mt-6">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i}
                            className="absolute w-full h-12"
                            style={{
                              background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
                              animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                              opacity: 0.3 / i,
                              transform: `translateY(${i * 5}px)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end mt-4">
                      <div className="text-xs text-slate-400">
                        Updated 5 min ago
                      </div>
                      <div className="text-sky-400 text-sm font-medium">
                        Join Discussion →
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>

          {/* Additional Topics Grid - Now also using 3D pins */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trendingTopics.slice(3).map((topic, index) => (
                <div key={index} className="h-[20rem] flex items-center justify-center">
                  <PinContainer title={`Explore ${topic.name}`}>
                    <div className="flex flex-col p-6 tracking-tight text-slate-100/50 w-[16rem] h-[16rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <div className="text-xs text-slate-400">Trending</div>
                      </div>

                      {/* Topic Name */}
                      <div className="text-lg font-bold text-slate-100 mb-4">
                        #{topic.name}
                      </div>
                      
                      {/* Stats */}
                      <div className="space-y-3 flex-1">
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-sky-400">{topic.posts}</div>
                          <div className="text-xs text-slate-400">Active Posts</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-xl font-bold text-emerald-400">{topic.growth}</div>
                          <div className="text-xs text-slate-400">Growth This Week</div>
                        </div>

                        {/* Activity Indicator */}
                        <div className="relative h-8 overflow-hidden mt-4">
                          {[1, 2].map((i) => (
                            <div 
                              key={i}
                              className="absolute w-full h-8"
                              style={{
                                background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
                                animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                                opacity: 0.4 / i,
                                transform: `translateY(${i * 3}px)`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-end mt-3">
                        <div className="text-xs text-slate-400">
                          Updated now
                        </div>
                        <div className="text-sky-400 text-xs font-medium">
                          Join →
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingTopicsSection;
