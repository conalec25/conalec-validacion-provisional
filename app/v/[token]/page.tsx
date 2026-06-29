type PageProps = {
  params: {
    token: string;
  };
};

function ConalecLogo() {
  return (
    <svg className="brand-mark" viewBox="0 0 160 110" role="img" aria-label="CONALEC">
      <path d="M48 80 C18 65 15 28 39 12 C60 28 67 54 48 80Z" fill="#00953b" />
      <path d="M80 82 C56 51 60 21 80 2 C100 21 104 51 80 82Z" fill="#78a834" />
      <path d="M112 80 C142 65 145 28 121 12 C100 28 93 54 112 80Z" fill="#d9a300" />
      <path d="M76 76 V28" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M44 66 V38" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 47 V35 M44 47 V34 M48 47 V35" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="28" r="7" fill="#fff" />
    </svg>
  );
}

export default function ValidacionProvisionalPage({ params }: PageProps) {
  const token = decodeURIComponent(params.token ?? "demo");

  return (
    <main className="validation-page">
      <section className="validation-shell" aria-label="Validación provisional de credencial">
        <div className="brand">
          <ConalecLogo />
          <h1 className="brand-name">CONALEC</h1>
        </div>

        <div className="card">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          <div className="shield-wrap" aria-hidden="true">
            <div className="shield" />
          </div>

          <div className="divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-check">✓</span>
            <span className="divider-line" />
          </div>

          <h2 className="status-title">CREDENCIAL AUTORIZADA</h2>
          <div className="status-dot" />
          <p className="status-message">Documento corporativo verificado correctamente.</p>

          <div className="token-box" title={token}>
            <strong>Validación provisional</strong>
            <span>{token}</span>
          </div>
        </div>

        <p className="provisional-note">
          Esta página es provisional mientras se implementa la validación individual por QR. No muestra datos personales ni información sensible.
        </p>
      </section>
    </main>
  );
}
