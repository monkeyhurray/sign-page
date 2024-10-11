import type { Metadata } from 'next';
import '@/styles/style.scss';

export const metadata: Metadata = {
  title: '로그인 회원가입 연습',
  description: '더 효율적으로 완성해보기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
