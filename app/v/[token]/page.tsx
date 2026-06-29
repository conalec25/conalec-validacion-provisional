type PageProps = {
  params: {
    token: string;
  };
};
export default function ValidacionProvisionalPage({ params }: PageProps) {
  const token = decodeURIComponent(params.token ?? "demo");

  return (
    <main className="validation-page">
      <section className="validation-shell" aria-label="Validación provisional de credencial">
        <header className="brand" aria-label="Encabezado institucional">
          <h1 className="brand-name">CONALEC</h1>
        </header>

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
