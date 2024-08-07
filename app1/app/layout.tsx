'use client';

import './globals.css';
import { ThemeProvider } from '@learnbit-react/next-monorepo.theme.theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
