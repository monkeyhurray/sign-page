'use client';

import { useRouter } from 'next/navigation';
const Home = () => {
  const router = useRouter();
  return (
    <div>
      <p>
        <span onClick={() => router.push('/login')}>로그인</span>
        <span onClick={() => router.push('/sign-up')}>회원가입</span>
      </p>
    </div>
  );
};

export default Home;
