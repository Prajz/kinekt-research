import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { paths, getPathBySlug, getItemsByPath } from '@/lib/library';
import type { PathSlug } from '@/lib/library';
import { ScrollReveal } from '@/components/ScrollReveal';

export function generateStaticParams() {
  return paths.map((path) => ({ slug: path.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const path = getPathBySlug(params.slug);
  if (!path) return {};
  const title = `${path.title} — Kinekt Research`;
  const description = path.description;
  return {
    title,
    description,
    openGraph: {
      title: path.title,
      description,
      url: `https://kinektresearch.com/path/${path.slug}`,
      siteName: 'Kinekt Research',
      type: 'website',
    },
  };
}

export default function PathPage({ params }: { params: { slug: string } }) {
  const path = getPathBySlug(params.slug);
  if (!path) return notFound();

  const items = getItemsByPath(params.slug as PathSlug);

  return (
    <>
      <div className="page-header">
        <div className="track-detail-header">
          <div className="track-detail-icon">{path.icon}</div>
          <h1 className="track-detail-title">{path.title}</h1>
          <p className="track-detail-subtitle">{path.subtitle}</p>
          <p className="track-detail-desc">{path.description}</p>
        </div>
      </div>

      <div className="section-container">
        <nav className="track-nav">
          {paths.map((t) => (
            <Link
              key={t.slug}
              href={`/path/${t.slug}`}
              className={`track-nav-link ${t.slug === params.slug ? 'active' : ''}`}
            >
              {t.title}
            </Link>
          ))}
        </nav>

        <div className="track-items-list">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.04}>
              <Link href={`/read/${item.slug}`} className="track-item-card">
                <span className="track-item-level">L{item.level}</span>
                <div className="track-item-info">
                  <div className="track-item-title">{item.title}</div>
                  <div className="track-item-author">{item.author}</div>
                  <div className="track-item-desc">{item.description}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
