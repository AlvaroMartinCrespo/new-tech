import { useRouter } from 'next/router';
import Layout from '../components/layout';
export default function New() {
  const router = useRouter();
  // Esto funciona
  const { slug } = router.query;
  console.log(slug);
  // A partir de ahi tienes que sacar la noticia, ya que tienes que tener el id de la noticia o algo
  return (
    <>
      <Layout>
        <section className="container mx-auto">
          <h1>{slug}</h1>
        </section>
      </Layout>
    </>
  );
}
