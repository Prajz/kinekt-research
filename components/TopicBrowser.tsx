import Link from 'next/link';
import { topics, getItemsByTopic } from '@/lib/library';

export function TopicBrowser() {
  return (
    <div className="topic-browser">
      {topics.map((topic) => {
        const items = getItemsByTopic(topic.slug);
        const previewItems = items.slice(0, 2);
        const remainingCount = items.length - previewItems.length;
        return (
          <div key={topic.slug} className="topic-card">
            <div className="topic-card-head">
              <div className="topic-card-title">{topic.title}</div>
              <div className="topic-card-count">
                {items.length} {items.length === 1 ? 'text' : 'texts'}
              </div>
            </div>
            <div className="topic-card-desc">{topic.description}</div>
            <div className="topic-card-items">
              {previewItems.map((item) => (
                <Link key={item.slug} href={`/read/${item.slug}`} className="topic-card-item">
                  <span className="prompt">&gt;</span> {item.title}
                </Link>
              ))}
            </div>
            {remainingCount > 0 && <div className="topic-card-more">+{remainingCount} more</div>}
          </div>
        );
      })}
    </div>
  );
}
