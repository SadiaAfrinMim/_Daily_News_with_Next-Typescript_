"use client"
import fetchNews from '@/lib/fetchnews';
import {  NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react'
import NewsCard from '../shared/NewsCard';
import SearchBar from './SearchBar';
import CategoryFiltering from './CategoryFiltering';

const NewsList = () => {
    const [news,setNews]= useState<NewsItem[]>([]);
    const[search,setSearch] = useState<string>("")

    const[category,setCategory] = useState<string>("");

    useEffect(()=>{
      const getNews = async ()=>{
        const data = await fetchNews(search,category)
        setNews(data)
      }
      getNews()

    },[search,category])
      console.log(news)
  return (
   <div>
    <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-5'>
      <SearchBar onSearch={setSearch}></SearchBar>
      <CategoryFiltering OnChangeCategory={setCategory}></CategoryFiltering>
    </div>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
        news.map((item)=>(<NewsCard key={item?._id} item={item}></NewsCard>))
      }
      
    </div>
   </div>
  )
}

export default NewsList
