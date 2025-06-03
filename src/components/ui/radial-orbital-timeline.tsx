
import { useOrbitalTimeline, TimelineItem } from "@/hooks/useOrbitalTimeline";
import OrbitalCenter from "@/components/ui/orbital-center";
import OrbitalNode from "@/components/ui/orbital-node";

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData
}: RadialOrbitalTimelineProps) {
  const {
    expandedItems,
    pulseEffect,
    centerOffset,
    containerRef,
    orbitRef,
    nodeRefs,
    toggleItem,
    handleContainerClick,
    calculateNodePosition,
    isRelatedToActive
  } = useOrbitalTimeline(timelineData);

  const handleNodeClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    toggleItem(id);
  };

  return (
    <div 
      className="w-full h-[600px] flex flex-col items-center justify-center bg-black overflow-hidden" 
      ref={containerRef} 
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div 
          className="absolute w-full h-full flex items-center justify-center" 
          ref={orbitRef} 
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`
          }}
        >
          <OrbitalCenter />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            return (
              <div
                key={item.id}
                ref={el => nodeRefs.current[item.id] = el}
              >
                <OrbitalNode
                  item={item}
                  position={position}
                  isExpanded={isExpanded}
                  isRelated={isRelated}
                  isPulsing={isPulsing}
                  timelineData={timelineData}
                  onToggle={toggleItem}
                  onNodeClick={handleNodeClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
