import { TrendingUp } from "lucide-react";
const trendingTopics = [{
  name: "NSE Stock Picks",
  posts: 243,
  growth: "+12%"
}, {
  name: "Crypto for Beginners",
  posts: 198,
  growth: "+28%"
}, {
  name: "SACCO Dividends",
  posts: 175,
  growth: "+5%"
}, {
  name: "Real Estate Funds",
  posts: 132,
  growth: "+8%"
}, {
  name: "Treasury Bills",
  posts: 118,
  growth: "+16%"
}];
const recentPosts = [{
  author: "Faith Wangari",
  title: "How I grew my SACCO shares by 22% last year",
  tags: ["SACCO", "Investment", "Growth"],
  engagement: "124 comments"
}, {
  author: "Michael Kamau",
  title: "Beginner's guide to Nairobi Securities Exchange",
  tags: ["NSE", "Stocks", "Beginner"],
  engagement: "98 comments"
}, {
  author: "Dr. Elizabeth Odhiambo",
  title: "The role of crypto in Kenya's financial future",
  tags: ["Crypto", "Future", "Analysis"],
  engagement: "156 comments"
}];
const CommunitySection = () => {
  return <section id="community" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Vibrant Investment Community</h2>
          <p className="text-lg max-w-2xl mx-auto text-zinc-950">
            Connect with thousands of Kenyan investors sharing knowledge and opportunities in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-geltPurple" />
              Trending Topics
            </h3>
            <ul className="space-y-4">
              {trendingTopics.map((topic, index) => <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-purple-900 font-semibold">#{topic.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-3 text-zinc-950 font-semibold">{topic.posts} posts</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{topic.growth}</span>
                  </div>
                </li>)}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Recent Community Posts</h3>
            <div className="space-y-6">
              {recentPosts.map((post, index) => <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.engagement}</span>
                  </div>
                  <h4 className="text-lg font-medium mb-3">{post.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => <span key={i} className="hashtag px-2 py-1 rounded-full bg-geltPurple-light text-xs">
                        #{tag}
                      </span>)}
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>Posted 2 days ago</span>
                    <button className="text-geltPurple hover:underline">Read More</button>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CommunitySection;