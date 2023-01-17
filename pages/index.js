import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title={'Home'} />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/**
 * html 뿐만 아니라 data까지 server side rendering으로 처리하는 함수
 * 함수명 고정 필수
 * 서버에서만 실행되는 함수 -> 화면에서 디버깅 및 fetch시 로그 확인 불가
 * next.config.js에서 rewrites 대체로 사용 가능
 * 무조건 객체를 반환해야함
 * 반환한 객체는 현재 js파일의 컴포넌트의 props로 전달
 * 모든 페이지에서 각각 선언해야함
 *
 * pros: 모든 데이터를 서버에서 렌더링 후 내려주므로 보안상으로 좋음
 * cons: 서버의 상태나 네트워크 상태가 나쁠 경우 client는 빈 화면을 보고 있어야함
 *
 * 실행순서:
 *  1. getServerSideProps에서 데이터 fetch 후 object 리턴
 *  2. _app.js에 pageProps로 전달
 *  3. 렌더링 되는 전체 컴포넌트(Component)에 전역적으로 props(pageProps) 전달
 */
export const getServerSideProps = async () => {
  // 백엔드 서버에서 실행하는 api url이므로 next.config.js에 정의된 마스킹 url은 서버가 모른다.
  // 따라서 도메인도 함께 적어줘야함
  const { results } = await (
    await fetch(`http://localhost:3000/api/popular-movies/en-US/1`)
  ).json();

  return {
    props: {
      results
    }
  };
};
