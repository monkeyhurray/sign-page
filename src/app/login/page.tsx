'use client';

import HookForm from '@/components/sign/HookForm';

const LoginPage = () => {
  const loginFn = () => {};

  return (
    <div>
      <HookForm signFn={loginFn} label="로그인" />
    </div>
  );
};

export default LoginPage;
