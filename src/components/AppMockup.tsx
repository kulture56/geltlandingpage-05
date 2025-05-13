
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NotificationPostProps {
  userName: string;
  timeAgo: string;
  content: React.ReactNode;
  initials: string;
}

const NotificationPost = ({ userName, timeAgo, content, initials }: NotificationPostProps) => (
  <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100 mb-4 transform hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-start gap-3">
      <Avatar>
        <AvatarFallback className="bg-geltPurple-light text-geltPurple font-bold">{initials}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">{userName}</div>
        <div className="text-gray-500 text-sm">{timeAgo}</div>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  </div>
);

const AppMockup = () => {
  return (
    <div className="relative w-full md:w-auto">
      <div className="relative z-10 md:-mr-4 lg:-mr-8 transform">
        {/* Main phone mockup */}
        <div className="relative mx-auto md:mr-0 max-w-[300px]">
          <img 
            src="/lovable-uploads/ea7932b9-597f-487c-bfb1-9b3ba83e8867.png" 
            alt="GELT Investment App" 
            className="w-full h-auto rounded-3xl shadow-2xl" 
          />
        </div>
        
        {/* Notification overlays */}
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-12 max-w-[70%]">
          <img 
            src="/lovable-uploads/9ff5c48d-b107-4540-905e-04af197ac506.png" 
            alt="GELT app notification" 
            className="w-44 h-auto rounded-xl shadow-lg transform -rotate-6" 
          />
        </div>
        
        <div className="absolute bottom-20 -left-8 max-w-[60%]">
          <img 
            src="/lovable-uploads/00ada838-ff62-4066-bf56-e0cc7125d00d.png" 
            alt="GELT app interface" 
            className="w-36 h-auto rounded-xl shadow-lg transform rotate-12" 
          />
        </div>
      </div>
      
      {/* Notification posts - positioned on the side on desktop */}
      <div className="hidden lg:block absolute -left-72 top-1/2 -translate-y-1/2 w-64 space-y-4">
        <NotificationPost 
          userName="John Makau"
          timeAgo="2 minutes ago"
          content={<p>Just invested in <span className="text-geltPurple font-medium">#SACCO</span> shares after our community discussion. Learned so much, asante! 🚀</p>}
          initials="JM"
        />
        
        <NotificationPost 
          userName="Wanjiku Njeri"
          timeAgo="5 minutes ago"
          content={<p>Rafiki AI just helped me understand <span className="text-geltPurple font-medium">#CRYPTO</span> basics. So easy to follow! Who else is learning?</p>}
          initials="WN"
        />
      </div>
      
      {/* Mobile-visible notification posts - below the main phone */}
      <div className="lg:hidden mt-8 space-y-4 max-w-sm mx-auto">
        <NotificationPost 
          userName="John Makau"
          timeAgo="2 minutes ago"
          content={<p>Just invested in <span className="text-geltPurple font-medium">#SACCO</span> shares after our community discussion. Learned so much, asante! 🚀</p>}
          initials="JM"
        />
        
        <NotificationPost 
          userName="Wanjiku Njeri"
          timeAgo="5 minutes ago"
          content={<p>Rafiki AI just helped me understand <span className="text-geltPurple font-medium">#CRYPTO</span> basics. So easy to follow! Who else is learning?</p>}
          initials="WN"
        />
        
        <NotificationPost 
          userName="David Omondi"
          timeAgo="10 minutes ago"
          content={<p>My <span className="text-geltPurple font-medium">#STOCKS</span> portfolio is up 15% since joining GELT's expert webinars. Tuko pamoja! 💪🏾</p>}
          initials="DO"
        />
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-geltPurple/20 to-geltPurple-light/30 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AppMockup;
