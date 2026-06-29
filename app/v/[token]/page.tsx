export default function ValidacionProvisionalPage() {
  return (
    <main className="validation-page">
      <section className="validation-shell" aria-label="Validación provisional de credencial">
        <header className="brand" aria-label="Encabezado institucional">
          <img className="brand-mark" src="/logo-conalec.png" alt="CONALEC" />
        </header>

        <div className="card">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          <div className="check-circle" aria-hidden="true">
            <span className="check-mark">✓</span>
          </div>

          <div className="divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-line" />
          </div>

          <h2 className="status-title">CREDENCIAL AUTORIZADA</h2>
          <div className="status-dot" />
          <p className="status-message">Documento corporativo verificado correctamente.</p>
        </div>

        <p className="provisional-note">
          Esta página es provisional mientras se implementa la validación individual por QR. No muestra datos personales ni información sensible.
        </p>
      </section>
    </main>
  );
}
