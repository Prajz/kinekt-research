import Link from 'next/link';
import { paths } from '@/lib/library';

export function PathPicker() {
  return (
    <div className="track-picker">
      {paths.map((path) => (
        <Link key={path.slug} href={`/path/${path.slug}`} className="track-card">
          <div className="track-card-title">{path.title}</div>
          <div className="track-card-subtitle">{path.subtitle}</div>
        </Link>
      ))}
    </div>
  );
}
