import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplMatchData} = props
  const {teamImageUrl, name, id} = iplMatchData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-cards-container">
        <div className="team-card">
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <h1 className="team-card-heading">{name}</h1>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
