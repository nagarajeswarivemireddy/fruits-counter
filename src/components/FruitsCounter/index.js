/* eslint-disable no-undef */
// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  render() {
    const {count1, count2} = this.state

    onEatMangos = () => {
      this.setState(prevState => ({count1: prevState.count1 + 1}))
    }
    onEatBananas = () => {
      this.setState(prevState => ({count2: prevState.count2 + 1}))
    }
    return (
      <div className="bg-container">
        <h1 className="heading">
          Bob ate {count1} mangoes {count2} bananas
        </h1>
        <div className="fruitsContainer">
          <div className="mangoescard">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button className="button" type="button" onClick={this.onEatMangos}>
              Eat Mango
            </button>
          </div>
          <div className="mangoescard">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button
              className="button"
              type="button"
              onClick={this.onEatBananas}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
