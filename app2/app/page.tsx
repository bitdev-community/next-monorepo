'use client';

import React from 'react';
import { Hero } from '@learnbit-react/next-monorepo.sections.hero';

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to app2!"
        message="This is a demo of a Next.js monorepo with shared components."
        ctaButton={{
          label: 'Get started',
          action: () => alert('Set started'),
        }}
      />
    </main>
  );
}
