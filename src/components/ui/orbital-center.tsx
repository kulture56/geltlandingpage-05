
export default function OrbitalCenter() {
  return (
    <>
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
        <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
        <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{
          animationDelay: "0.5s"
        }}></div>
        <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
      </div>
      <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>
    </>
  );
}
