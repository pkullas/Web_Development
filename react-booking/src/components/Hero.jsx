function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">The roar is calling</p>
        <h1 id="hero-heading">
          Every match.
          <br />
          <span>One big feeling.</span>
        </h1>
        <p className="hero-description">
          Be there for the big hits, last-over finishes, and the energy only a
          live match can bring.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#matches">Explore matches</a>
          <a className="text-link" href="#booking">How booking works <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note">
          <span className="live-dot" aria-hidden="true"></span>
          <span>Season 2026 fixtures are here</span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="stadium-glow"></div>
        <div className="stadium-ring stadium-ring-outer"></div>
        <div className="stadium-ring stadium-ring-inner"></div>
        <div className="pitch">
          <div className="pitch-line"></div>
          <div className="pitch-wicket"></div>
        </div>
        <div className="hero-ball"></div>
        <span className="art-label art-label-top">MATCH DAY</span>
        <span className="art-label art-label-bottom">IPL 2026</span>
      </div>
    </section>
  )
}

export default Hero
