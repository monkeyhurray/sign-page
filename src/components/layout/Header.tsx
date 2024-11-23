import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.scss';

const Header = () => {
  return (
    <>
      <Link href="/" className={styles['header-contents']}>
        홈
      </Link>
      <Link href="/login" className={styles['header-contents']}>
        로그인
      </Link>
      <Link href="/sign-up" className={styles['header-contents']}>
        회원가입
      </Link>
    </>
  );
};

export default Header;
