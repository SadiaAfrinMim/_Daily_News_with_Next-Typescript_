
 export interface NewsItem{
  _id: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string; // or Date if you parse it later
  source: string;
  categories: string[];
  relevance_score: number | null;
  };


  export interface NewsCardProps {
    item: NewsItem;
  };







  
  