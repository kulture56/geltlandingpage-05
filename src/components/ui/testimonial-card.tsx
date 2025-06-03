
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  position: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';
  
  return <Card {...href ? {
    href
  } : {}} className={cn(
    "flex flex-col rounded-lg border-t", 
    "bg-gradient-to-b from-muted/80 to-muted/40", 
    "p-4 text-start sm:p-6", 
    "hover:from-muted/90 hover:to-muted/60", 
    "max-w-[320px] sm:max-w-[320px]", 
    "transition-colors duration-300",
    "shadow-lg border border-gray-200",
    className
  )}>
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 ring-2 ring-purple-200">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-bold leading-none text-gray-900">
            {author.name}
          </h3>
          <p className="text-sm text-gray-700 font-medium">
            {author.position}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-800 font-medium leading-relaxed">
        {text}
      </p>
    </Card>;
}
