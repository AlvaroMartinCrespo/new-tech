import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from './components/layout';

export default function Home() {
  return (
    <main>
      <Layout>
        <section className="container mx-auto">
          <h1 className="text-5xl font-bold">Inicio</h1>
        </section>
      </Layout>
    </main>
  );
}
