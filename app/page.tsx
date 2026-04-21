import Link from 'next/link';
import Image from 'next/image';
import { TerminalWindow } from '@/components/TerminalWindow';
import { ScanLine } from '@/components/ScanLine';
import { BlinkingCursor } from '@/components/BlinkingCursor';
import { PathPicker } from '@/components/PathPicker';
import { TopicBrowser } from '@/components/TopicBrowser';
import { Panel } from '@/components/Panel';
import { PanelHeader } from '@/components/PanelHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { allItems, levels } from '@/lib/library';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-terminal">
          <TerminalWindow>
            <ScanLine />
            <div className="hero-content">
              <div className="hero-fade hero-fade-1">
                <Image
                  src="/logo.png"
                  alt="Kinekt"
                  width={80}
                  height={80}
                  className="hero-logo"
                />
                <h1 className="hero-title">Kinekt Research</h1>
                <p className="hero-subtitle">Free Finance Learning</p>
              </div>
              <div className="hero-fade hero-fade-2">
                <p className="hero-tagline">
                  <span className="prompt">&gt;</span> From Menger to machine learning.
                  <BlinkingCursor />
                </p>
              </div>
              <div className="hero-fade hero-fade-3">
                <p className="hero-desc">
                  A free, structured library for learning investing and quantitative
                  finance from first principles. {allItems.length} readings across {levels.length} progressive levels.
                </p>
              </div>
              <div className="hero-fade hero-fade-4">
                <div className="hero-ctas">
                  <Link href="/library" className="btn-primary">
                    <span className="prompt">&gt;</span> Open the Library
                  </Link>
                  <Link href="/path/fundamental" className="btn-secondary">
                    Browse by Path
                  </Link>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <section className="section-container home-discovery">
        <ScrollReveal>
          <Panel glow>
            <PanelHeader title="Library at a glance" description="A compact map of the catalog" />

            <div className="home-stats">
              <div className="library-stat">
                <div className="library-stat-value">{allItems.length}</div>
                <div className="library-stat-label">Readings</div>
              </div>
              <div className="library-stat">
                <div className="library-stat-value">{levels.length}</div>
                <div className="library-stat-label">Levels</div>
              </div>
              <div className="library-stat">
                <div className="library-stat-value">4</div>
                <div className="library-stat-label">Paths</div>
              </div>
              <div className="library-stat">
                <div className="library-stat-value">5</div>
                <div className="library-stat-label">Topics</div>
              </div>
            </div>
          </Panel>
        </ScrollReveal>

        <div className="home-discovery-grid">
          <ScrollReveal>
            <Panel glow>
              <PanelHeader title="Choose Your Path" description="Four ways through the library" />
              <PathPicker />
            </Panel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Panel>
              <PanelHeader title="Browse by Topic" description="Quick previews of each theme" />
              <TopicBrowser />
            </Panel>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
