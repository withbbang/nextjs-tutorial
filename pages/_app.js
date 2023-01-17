/**
 * 페이지 렌더링 전 최우선 참조 파일
 *
 * 파일명, 파라미터명은 고정
 * 여기서 jsx global style 선언시 모든 페이지에서 적용된다
 * css파일을 만들어 import 하는것도 전역 스타일링 방법 중 하나이다.
 */

import NavBar from '../components/NavBar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar fontSize="30px" />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: blue;
        }
      `}</style>
    </>
  );
}
