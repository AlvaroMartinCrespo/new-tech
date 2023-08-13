import Head from 'next/head';
import Header from './Header';
export default function Layout({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title : 'Next App'}</title>
          <meta name="description" content="Next App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="bg-slate-800">{children}</main>
      </div>
    </>
  );
}
