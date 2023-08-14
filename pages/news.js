import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
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
      setNews(data.news.articles);
    };
    getNews();
  }, []);

  return (
    <>
      <Layout title="News">
        <section className="container mx-auto p-5">
          <div className="flex justify-center mt-32 text-white">
            <h1 className="text-5xl font-bold">News</h1>
          </div>
          {news ? (
            <>
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 mt-24">
                {news.map((news, index) => {
                  if (news.urlToImage === null) return null;
                  return (
                    <a key={index} href={news.url} target="_blank">
                      <Card className="py-4 ">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">{news.title}</p>
                          <small className="text-default-500">{news.publishedAt}</small>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <img className="w-full h-64" src={news.urlToImage} alt={news.title} />
                        </CardBody>
                      </Card>
                    </a>
                  );
                })}
              </section>
            </>
          ) : (
            <>
              <Loading title="Getting news..." />
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
