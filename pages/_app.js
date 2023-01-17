/**
 * 페이지 렌더링 전 최우선 참조 파일
 *
 * 파일명, 파라미터명은 고정
 * 여기서 jsx global style 선언시 모든 페이지에서 적용된다
 * css파일을 만들어 import 하는것도 전역 스타일링 방법 중 하나이다.
 * Component: 렌더링할 컴포넌트
 * Component: 전역적으로 넘겨줄 props
 */

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <style jsx global>{`
        a {
          color: blue;
        }
      `}</style> */}
    </>
  );
}
