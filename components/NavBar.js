import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar(props) {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === '/about' ? 'active' : ''}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
          font-size: ${props.fontSize};
        }
      `}</style>
    </nav>
  );
}
