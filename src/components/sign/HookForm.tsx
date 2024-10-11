'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '@/common/Input';
import Button from '@/common/Button';

import { schema } from '@/lib/userSchema';

import type { SignUserType } from '@/types/signType';

const HookForm = ({
  signFn,
  confirmPassword,
  label,
}: {
  signFn: () => unknown;
  confirmPassword?: string;
  label: string;
}) => {
  const [passowrdType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const changePasswordType = () =>
    passowrdType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password');

  const changeConfirmPassowrdType = () =>
    confirmPasswordType === 'password'
      ? setConfirmPasswordType('text')
      : setConfirmPasswordType('password');

  return (
    <>
      <h1>{label}</h1>
      <form onSubmit={handleSubmit(signFn)}>
        <Input
          register={register}
          id="id"
          type="text"
          placeholder="아이디 입력"
          errors={errors.id}
        />
        <Input
          register={register}
          password="password"
          type={passowrdType}
          placeholder="비밀번호 입력"
          changeType={changePasswordType}
          errors={errors.password}
        />
        {confirmPassword && (
          <>
            <Input
              register={register}
              type={confirmPasswordType}
              confirmPassword={confirmPassword}
              placeholder="비밀번호 확인"
              errors={errors.confirmPassword}
              changeType={changeConfirmPassowrdType}
            />
            <Input
              register={register}
              type="text"
              nickName="nickName"
              placeholder="닉네임"
              errors={errors.nickName}
            />
            <Input
              register={register}
              type="text"
              phoneNumber="phoneNumber"
              placeholder="핸드폰번호"
              errors={errors.phoneNumber}
            />
          </>
        )}
        <Button label={label} />
      </form>
    </>
  );
};

export default HookForm;
