import type { Metadata } from 'next';
import { allItems, levels } from '@/lib/library';
import { LevelCard } from '@/components/LevelCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const readingCount = allItems.length;
const levelCount = levels.length;

export const metadata: Metadata = {
  title: 'Library — Kinekt Research',
  description: `${readingCount} curated readings across ${levelCount} progressive levels, spanning economic foundations, investing philosophy, valuation, quantitative methods, market microstructure, and machine learning.`,
  openGraph: {
    title: 'Library — Kinekt Research',
    description: `${readingCount} curated readings organized into ${levelCount} progressive stages for investing and quantitative finance.`,
    url: 'https://kinektresearch.com/library',
    siteName: 'Kinekt Research',
  },
};

export default function LibraryPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Library</h1>
        <p className="page-subtitle">
          Levels of progressive reading, from economic foundations to advanced quantitative methods.
        </p>
      </div>

      <div className="section-container">
        {levels.map((level, i) => (
          <ScrollReveal key={level.number} delay={i * 0.05}>
            <LevelCard level={level} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
