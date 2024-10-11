'use client';

import HookForm from '@/components/sign/HookForm';

const SignUpPage = () => {
  const signUpFn = () => {};

  return (
    <div>
      <HookForm
        signFn={signUpFn}
        confirmPassword="confirmPassword"
        label="회원가입"
      />
    </div>
  );
};

export default SignUpPage;
