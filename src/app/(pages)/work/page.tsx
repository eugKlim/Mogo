import type { Metadata } from 'next';
import React from 'react';
import Work from '@/components/Work';

export const metadata: Metadata = {
  title: 'MoGo - Work',
  description: 'Generated by create next app work',
  keywords: 'word1, word2',
};
const workPage = () => {
  return (
    <div>
      <Work />
    </div>
  );
};

export default workPage;
