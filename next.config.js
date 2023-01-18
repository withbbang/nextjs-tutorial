/**
 * 이 파일은 수정할 때 마다 서버 재기동을 해야 적용된다.
 */

const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/before', //리다이렉트 트리거 url
        destination: '/after', //리다이렉트 목적 url
        permanent: false //해당 리다이렉션이 영구/비영구인지에 따라 브라우저나 검색엔진이 해당 정보 기억함
      },
      {
        source: '/before/:param', //목적 url에 파라미터 그대로 전달
        destination: '/after/:param',
        permanent: false
      },
      {
        source: '/before/:param*', //목적 url에 후문 모든 경로 전달
        destination: '/after/:param*',
        permanent: false
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api', //네트워크 콘솔에 보일 url
        destination: 'https://api/themoviedb.org/3/movie/blabla' //실제 요청 url
      },
      {
        source: '/api/popular-movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      },
      {
        source: '/api/popular-movies/:language/:page',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}${encodeURIComponent(
          '&'
        )}language=:language${encodeURIComponent('&')}page=:page` // url에 쿼리스트링이 들어갈 경우
      },
      {
        source: '/api/popular-movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  }
};

module.exports = nextConfig;
