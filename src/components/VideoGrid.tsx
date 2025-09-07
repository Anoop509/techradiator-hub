import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Play, Eye, Clock, ExternalLink } from "lucide-react";

// Mock video data - In a real app, this would come from YouTube API
const mockVideos = [
  {
    id: "1",
    title: "iPhone 15 Pro Max Unboxing & First Impressions - Is It Worth The Upgrade?",
    thumbnail: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop",
    duration: "12:45",
    views: "45K",
    uploadDate: "2 days ago",
    category: "Unboxing"
  },
  {
    id: "2", 
    title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max - Complete Comparison",
    thumbnail: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop",
    duration: "18:23",
    views: "78K",
    uploadDate: "1 week ago",
    category: "Review"
  },
  {
    id: "3",
    title: "Top 5 Gaming Laptops Under ₹1 Lakh - 2024 Edition",
    thumbnail: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    duration: "15:30",
    views: "92K",
    uploadDate: "2 weeks ago",
    category: "Review"
  },
  {
    id: "4",
    title: "Nothing Phone 2a Unboxing - Carl Pei's Budget Beast?",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    duration: "10:15",
    views: "67K",
    uploadDate: "3 weeks ago",
    category: "Unboxing"
  },
  {
    id: "5",
    title: "Build Your First PC in 2024 - Complete Step by Step Guide",
    thumbnail: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    duration: "22:10",
    views: "156K",
    uploadDate: "1 month ago",
    category: "Tutorial"
  },
  {
    id: "6",
    title: "Sony WH-1000XM5 vs Bose 700 - Best Noise Cancelling Headphone?",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    duration: "14:55",
    views: "89K",
    uploadDate: "1 month ago",
    category: "Review"
  }
];

const VideoGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Unboxing", "Review", "Tutorial"];

  const filteredVideos = useMemo(() => {
    let filtered = mockVideos;
    
    if (selectedFilter !== "All") {
      filtered = filtered.filter(video => video.category === selectedFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, selectedFilter]);

  const handleVideoClick = (videoId: string) => {
    // In a real app, this would open the YouTube video
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Latest Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest tech unboxings, reviews, and tutorials from Tech Radiator
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-xl border-border/50 bg-card/50 backdrop-blur-sm focus:border-primary/50 focus:bg-card"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className={`rounded-full px-4 ${
                  selectedFilter === category 
                    ? "bg-gradient-primary text-primary-foreground" 
                    : "border-border/50 hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="card-hover cursor-pointer group border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoClick(video.id)}
            >
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Duration Badge */}
                  <Badge className="absolute top-3 right-3 bg-background/90 text-foreground font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground font-medium">
                    {video.category}
                  </Badge>
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center neon-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {video.views} views
                      </span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <Button 
                    size="sm" 
                    className="w-full mt-4 bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No videos found matching your search.</p>
          </div>
        ) : (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-xl border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow"
            >
              Load More Videos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGrid;