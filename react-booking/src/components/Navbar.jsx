function Navbar() {
  return (
    <header className="site-header" id="home">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="IPL Ticket Hub home">
          <span className="brand-mark" aria-hidden="true">IPL</span>
          <span className="brand-copy">
            <strong>Ticket Hub</strong>
            <small>2026 SEASON</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#matches">Matches</a>
          <a href="#booking">Booking</a>
        </nav>
        <a className="nav-cta" href="#matches">Explore fixtures <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}

export default Navbar
