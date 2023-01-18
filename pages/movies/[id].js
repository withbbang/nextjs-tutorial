import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Detail() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;

    console.log(router);
  }, [router.isReady]);

  return (
    <div>
      <h4>{router.query.title || 'Loading...'}</h4>
    </div>
  );
}
