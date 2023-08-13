import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { User } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react';
export default function New() {
  const [dataNew, setDataNew] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const request = async () => {
      const res = await fetch('../api/getNew', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: router.query.slug,
        }),
      });
      const data = await res.json();
      console.log(data);
      setDataNew(data);
      setLoading(false);
    };
    request();
  }, []);

  return (
    <>
      <Layout>
        <section className="container mx-auto p-5">
          {loading ? (
            <>
              <Loading title="Getting new ..." />
            </>
          ) : (
            <>
              {dataNew.new.articles.length !== 0 ? (
                <>
                  <div className="flex justify-center p-5 mt-32 text-white min-h-screen">
                    <Card className="max-w-[400px]">
                      <CardHeader className="flex gap-3">
                        <User
                          name={dataNew.new.articles[0].author}
                          avatarProps={{
                            src: '../../public/icon/user.jpg',
                          }}
                        />
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <img className="w-full rounded-xl" src={dataNew.new.articles[0].urlToImage} />
                        <p className="text-justify p-2">{dataNew.new.articles[0].content}</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Link isExternal showAnchorIcon href={dataNew.new.articles[0].url}>
                          Visit page
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </>
              ) : (
                <>{router.push('/404')}</>
              )}
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
