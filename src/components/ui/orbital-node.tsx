
import { ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineItem } from "@/hooks/useOrbitalTimeline";

interface OrbitalNodeProps {
  item: TimelineItem;
  position: {
    x: number;
    y: number;
    angle: number;
    zIndex: number;
    opacity: number;
  };
  isExpanded: boolean;
  isRelated: boolean;
  isPulsing: boolean;
  timelineData: TimelineItem[];
  onToggle: (id: number) => void;
  onNodeClick: (e: React.MouseEvent, id: number) => void;
}

export default function OrbitalNode({
  item,
  position,
  isExpanded,
  isRelated,
  isPulsing,
  timelineData,
  onToggle,
  onNodeClick
}: OrbitalNodeProps) {
  const Icon = item.icon;
  
  const nodeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    zIndex: isExpanded ? 200 : position.zIndex,
    opacity: isExpanded ? 1 : position.opacity
  };

  return (
    <div
      className="absolute transition-all duration-700 cursor-pointer"
      style={nodeStyle}
      onClick={(e) => onNodeClick(e, item.id)}
    >
      <div
        className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
          width: `${item.energy * 0.5 + 40}px`,
          height: `${item.energy * 0.5 + 40}px`,
          left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
          top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`
        }}
      ></div>

      <div className={`
        w-10 h-10 rounded-full flex items-center justify-center
        ${isExpanded ? "bg-white text-black" : isRelated ? "bg-white/50 text-black" : "bg-black text-white"}
        border-2 
        ${isExpanded ? "border-white shadow-lg shadow-white/30" : isRelated ? "border-white animate-pulse" : "border-white/40"}
        transition-all duration-300 transform
        ${isExpanded ? "scale-150" : ""}
      `}>
        <Icon size={16} />
      </div>

      <div className={`
        absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
        text-xs font-bold tracking-wider
        transition-all duration-300
        ${isExpanded ? "text-white scale-125 drop-shadow-lg" : "text-white drop-shadow-md"}
      `}>
        {item.title}
      </div>

      {isExpanded && (
        <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm mt-2 text-white font-bold">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-white">
            <p className="font-medium">{item.content}</p>

            {item.relatedIds.length > 0 && (
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center mb-2">
                  <Link size={10} className="text-white/70 mr-1" />
                  <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Connected Nodes
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.relatedIds.map(relatedId => {
                    const relatedItem = timelineData.find(i => i.id === relatedId);
                    return (
                      <Button
                        key={relatedId}
                        variant="outline"
                        size="sm"
                        className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white transition-all font-medium"
                        onClick={(e) => onNodeClick(e, relatedId)}
                      >
                        {relatedItem?.title}
                        <ArrowRight size={8} className="ml-1 text-white/60" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
