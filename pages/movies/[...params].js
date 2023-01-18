import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Seo from '../../components/Seo';

/**
 * /someurl/:param1/:param2/:param3/:param4/:... 요청 들어왔을 경우
 * useRouter query에 배열로 무한히 들어갈 수 있음
 */
export default function Details({ params }) {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  /**
   * useRouter는 client side에서만 실행된다.
   * 따라서 pre-render한 html에는 router값이 존재하지 않아
   * const [title, id] = router.query.params;는 undefined에러가 난다
   * const [title, id] = router.query.params || [];로 대체해야한다.
   *
   * nextjs는 pre-render한 html을 먼저 내려주고 js를 내려주므로
   * useEffect(() => console.log(), []);를 하면 두번 찍히는 이유이다.
   */

  useEffect(() => {
    if (!router.isReady) return;

    console.log(router);
  }, [router.isReady]);

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

/**
 * 서버사이드로 url을 읽어서 컴포넌트에 내려줌
 */
export const getServerSideProps = async ({ params: { params } }) => {
  console.log(params);

  return {
    props: {
      params
    }
  };
};
