function MatchCard({ match, number }) {
  return (
    <article className="match-card">
      <div className="match-card-top">
        <span className="match-badge">MATCH {String(number).padStart(2, '0')}</span>
        <span className="match-date">{match.date}</span>
      </div>

      <div className="team-lineup">
        {match.teams.map((team, index) => (
          <div className="team" key={team.code}>
            <span className={`team-crest crest-${team.code.toLowerCase()}`}>
              {team.code}
            </span>
            <span className="team-name">{team.name}</span>
            {index === 0 && <span className="versus">VS</span>}
          </div>
        ))}
      </div>

      <div className="match-meta">
        <p><span>Venue</span>{match.venue}</p>
        <p><span>Start time</span>{match.time}</p>
      </div>

      <div className="match-card-footer">
        <p>Tickets from <strong>{match.startingPrice}</strong></p>
        <a href="#booking" aria-label={`View booking options for ${match.teams.map((team) => team.code).join(' vs ')}`}>
          Book <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default MatchCard
