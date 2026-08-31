export default function Contact() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>Hello?</h2>
        <div>
          <span style={{ fontWeight: 600, marginRight: '8px' }}>Email:</span>
          <a href="mailto:umbraveil@pm.me" style={{ color: 'inherit', textDecoration: 'underline' }}>umbraveil@pm.me</a>
        </div>
        <div>
          <span style={{ fontWeight: 600, marginRight: '8px' }}>LinkedIn:</span>
          <a href="https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3Br14bbX0VSbGPMsh5Hnwu4Q%3D%3D" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            View Profile
          </a>
        </div>
        <span style={{ fontWeight: 600, marginRight: '8px' }}>Phone: 0431 480 866</span>
        <div>

        </div>
      </div>
    );
  }