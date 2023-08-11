import Head from 'next/head';
import Header from './Header';
export default function Layout({ title, children }) {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <Head>
          <title>{title ? title : 'Next App'}</title>
          <meta name="description" content="Next App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
}
