import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { User } from '@nextui-org/react';
export default function New() {
  const [dataNew, setNew] = useState([]);
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
      setNew(data);
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
              <div className="flex justify-center p-5 mt-32 text-white min-h-screen">
                <h1>Ha llegado la request</h1>
              </div>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
