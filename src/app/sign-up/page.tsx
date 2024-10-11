'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
const HookFormComponent = dynamic(() => import('@/components/sign/HookForm'), {
  suspense: true,
});

const SignUpPage = () => {
  const signUpFn = () => {};

  return (
    <div className="sign-main">
      <Suspense fallback={<div>Loading...</div>}>
        <HookFormComponent
          signFn={signUpFn}
          confirmPassword="confirmPassword"
          label="회원가입"
        />
      </Suspense>
    </div>
  );
};

export default SignUpPage;
