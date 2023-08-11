import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="py-10">
        <ul className="flex justify-center">
          <li className="flex justify-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
