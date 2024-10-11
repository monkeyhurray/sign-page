'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const HookFormComponent = dynamic(() => import('@/components/sign/HookForm'), {
  suspense: true,
});

const LoginPage = () => {
  const loginFn = () => {};

  return (
    <div className="sign-main">
      <Suspense fallback={<div>Loading...</div>}>
        <HookFormComponent signFn={loginFn} label="로그인" />
      </Suspense>
    </div>
  );
};

export default LoginPage;
