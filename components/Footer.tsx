import { BlinkingCursor } from './BlinkingCursor';

export function Footer() {
  return (
    <footer className="footer">
      <span className="prompt">&gt;</span> Kinekt Research &nbsp;|&nbsp; Free Finance Learning &nbsp;|&nbsp; {new Date().getFullYear()}
      <BlinkingCursor />
    </footer>
  );
}
