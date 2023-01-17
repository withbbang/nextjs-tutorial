import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Link 사용시 a 태그와 달리 페이지 새로고침 없이 페이지 렌더링
 */

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
        a {
          text-decoration: none;
        }
        .active {
          color: red;
          font-size: ${props.fontSize};
        }
      `}</style>
    </nav>
  );
}
