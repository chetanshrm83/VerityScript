import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'VerityScript — Read. Understand. Connect.', description: 'A quiet, trustworthy space for Bible study.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
