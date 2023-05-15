import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageHead: 0,
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  imageChange = () => {
    const totalScore = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      imageHead: totalScore,
      totalCount: prevState.totalCount + 1,
    }))
    if (totalScore === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {imageHead, totalCount, headCount, tailCount} = this.state

    let image
    if (imageHead === 0) {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="img"
          alt="toss result"
        />
      )
    } else {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="img"
          alt="toss result"
        />
      )
    }

    return (
      <div className="bg-color">
        <div className="sub-div">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          {image}
          <button className="button" type="button" onClick={this.imageChange}>
            Toss Coin
          </button>
          <div className="for-par">
            <p className="paragraph1">Total: {totalCount}</p>
            <p className="paragraph1">Heads: {headCount}</p>
            <p className="paragraph1">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
