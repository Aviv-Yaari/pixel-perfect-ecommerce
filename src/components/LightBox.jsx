export function LightBox({ children, onClose, isContentCentered }) {
  return (
    <div className="light-box">
      <div className={`overlay ${isContentCentered ? 'place-content-center' : ''}`} onClick={onClose}>
        <main className="content" onClick={ev => ev.stopPropagation()}>
          {children}
        </main>
      </div>
    </div>
  );
}
