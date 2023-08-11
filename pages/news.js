import Layout from './components/layout';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@nextui-org/progress';
export default function News() {
  const [news, setNews] = useState('');
  // Get the news from the API
  useEffect(() => {
    const getNews = async () => {
      const res = await fetch('./api/getNews');
      const data = await res.json();
      console.log(data);
      setTimeout(() => {
        setNews(data);
      }, 1500);
    };
    getNews();
  }, []);

  return (
    <>
      <Layout>
        <section className="container mx-auto">
          <h1 className="text-5xl font-bold">News</h1>
          {news ? (
            <>
              <h1>Estan las noticias</h1>
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
