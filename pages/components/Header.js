import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      if (window.scrollY !== 0) {
        header.classList.add('opacity-10');
        header.classList.remove('py-10');
        header.classList.add('py-5');
      } else {
        header.classList.remove('opacity-10');
        header.classList.remove('py-5');
        header.classList.add('py-10');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className="py-10 bg-slate-900 text-white fixed w-full z-50 transition-all ease-in-out duration-300 hover:opacity-100 hover:py-10"
      >
        <ul className="flex justify-center items-center">
          <li className="flex justify-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
