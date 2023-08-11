import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from './components/layout';

export default function Home() {
  return (
    <main>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </main>
  );
}
