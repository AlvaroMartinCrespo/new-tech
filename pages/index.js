import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from './components/Layout';

export default function Home() {
  return (
    <main>
      <Layout>
        <section className="container mx-auto p-5">
          <div className="flex justify-center mt-32 text-white min-h-screen">
            <h1 className="text-5xl font-bold">Inicio</h1>
          </div>
        </section>
      </Layout>
    </main>
  );
}
