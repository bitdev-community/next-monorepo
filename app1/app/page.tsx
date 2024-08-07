'use client';

import React from 'react';
import { Hero } from '@learnbit-react/next-monorepo.sections.hero';

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to app1!"
        message="This is a demo of a Next.js monorepo with shared components."
        ctaButton={{
          label: 'Learn more',
          action: () => alert('Learn more'),
        }}
      />
    </main>
  );
}
