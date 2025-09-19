import { Container, Header } from '@/shared/components/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Pizza | Кошик',
  description: 'Кошик для оформлення замовлення',
};

//15:36

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen bg-[#f4f1ee]'>
      <Header hasSearch={false} hasCart={false} />
      {children}
    </main>
  );
}
