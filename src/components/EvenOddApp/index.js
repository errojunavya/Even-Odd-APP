// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomCount: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(prevState.randomCount)
      return {randomCount: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {randomCount} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="count-heading">Count {randomCount}</h1>
          {randomCount % 2 === 0 ? (
            <p className="count-para">Count is Even</p>
          ) : (
            <p className="count-para">Count is Odd</p>
          )}
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
