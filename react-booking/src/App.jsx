import { useState } from 'react'
import Hero from './components/Hero.jsx'
import MatchCard from './components/MatchCard.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

const matches = [
  {
    id: 'match-01',
    date: 'April 5, 2026',
    time: '7:30 PM',
    venue: 'Wankhede Stadium, Mumbai',
    startingPrice: 'Rs. 1,500',
    teams: [
      { code: 'RCB', name: 'Royal Challengers Bengaluru' },
      { code: 'MI', name: 'Mumbai Indians' },
    ],
  },
  {
    id: 'match-02',
    date: 'April 6, 2026',
    time: '7:30 PM',
    venue: 'M. A. Chidambaram Stadium, Chennai',
    startingPrice: 'Rs. 1,200',
    teams: [
      { code: 'CSK', name: 'Chennai Super Kings' },
      { code: 'KKR', name: 'Kolkata Knight Riders' },
    ],
  },
  {
    id: 'match-03',
    date: 'April 7, 2026',
    time: '7:30 PM',
    venue: 'Arun Jaitley Stadium, Delhi',
    startingPrice: 'Rs. 1,000',
    teams: [
      { code: 'DC', name: 'Delhi Capitals' },
      { code: 'SRH', name: 'Sunrisers Hyderabad' },
    ],
  },
]

const teams = ['CSK', 'DC', 'KKR', 'MI', 'RCB', 'SRH']

function App() {
  const [selectedTeam, setSelectedTeam] = useState('all')
  const visibleMatches = matches.filter(
    (match) =>
      selectedTeam === 'all' ||
      match.teams.some((team) => team.code === selectedTeam),
  )

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="schedule-section" id="matches" aria-labelledby="matches-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The 2026 season</p>
              <h2 id="matches-heading">Find your next match</h2>
            </div>
            <p className="section-description">
              Pick a fixture and get ready for an unforgettable night of cricket.
            </p>
          </div>

          <div className="match-toolbar">
            <label htmlFor="team-filter">Filter by team</label>
            <select
              id="team-filter"
              onChange={(event) => setSelectedTeam(event.target.value)}
              value={selectedTeam}
            >
              <option value="all">All teams</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <span className="match-count" aria-live="polite">
              {visibleMatches.length} {visibleMatches.length === 1 ? 'match' : 'matches'}
            </span>
          </div>

          <div className="match-grid">
            {visibleMatches.map((match, index) => (
              <MatchCard key={match.id} match={match} number={index + 1} />
            ))}
          </div>
          {visibleMatches.length === 0 && (
            <p className="empty-state">No matches found for this team.</p>
          )}
        </section>

        <section className="booking-callout" id="booking" aria-labelledby="booking-heading">
          <div>
            <p className="eyebrow">Make it a matchday</p>
            <h2 id="booking-heading">Your seat is waiting.</h2>
            <p>Choose a fixture above to explore ticket options.</p>
          </div>
          <a className="button button-light" href="#matches">
            Browse matches
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <p>IPL 2026 Ticket Booking</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  )
}

export default App
