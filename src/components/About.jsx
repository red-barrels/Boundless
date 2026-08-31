export default function About() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--window-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            [ IMG ]
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '24px' }}>Tom Cheesman</h2>
            <p style={{ margin: '4px 0 0 0', opacity: 0.7 }}>Creative Lead</p>
          </div>
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Directive</h3>
          <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.5' }}>Deliver engaging digital content.</p>
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Skills</h3>
          <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.5' }}>UX/UI, Generative AI, IT, HTML, CSS, Graphic Design, Photography, Videography, Directing</p>
        </div>
      </div>
    );
  }