import Layout from './components/layout';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@nextui-org/progress';
import Image from 'next/image';
export default function News() {
  const [news, setNews] = useState('');
  // Get the news from the API
  useEffect(() => {
    const getNews = async () => {
      const res = await fetch('./api/getNews', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      setTimeout(() => {
        setNews(data.news.articles);
      }, 1500);
    };
    getNews();
  }, []);

  return (
    <>
      <Layout>
        <section className="container mx-auto p-5">
          {news ? (
            <>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                {news.map((news) => {
                  return (
                    <div key={news.id}>
                      <h1>{news.title}</h1>
                      <img className="w-full h-64" src={news.urlToImage} alt={news.title} />
                      <div className="flex justify-end p-2">
                        <span className="italic">{news.publishedAt}</span>
                      </div>
                    </div>
                  );
                })}
              </section>
            </>
          ) : (
            <>
              <section className="flex justify-center items-center gap-4">
                <CircularProgress aria-label="Loading..." />
                <span>Getting news...</span>
              </section>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
