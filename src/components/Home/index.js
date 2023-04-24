import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getIplMatchesData()
  }

  getIplMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplMatchesData: formattedData, isLoading: false})
  }

  renderTeamsCardList = () => {
    const {iplMatchesData} = this.state
    return (
      <ul className="teams-card-container">
        {iplMatchesData.map(item => (
          <TeamCard key={item.id} iplMatchData={item} />
        ))}
      </ul>
    )
  }

  renderLoader = () => {
    ;<div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div>
          <div className="ipl-logo-container" data-testid="loader">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsCardList()}
        </div>
      </div>
    )
  }
}

export default Home
