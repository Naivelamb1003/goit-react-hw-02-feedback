import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState ((prevState)=>{
      return {
        good: prevState.good + 1, 
        }

    });

  }

  handleneutralIncrement = ()=>{
    this.setState(prevState => ({
      neutral: prevState.neutral + 1, 
    }))
  }

  handlebadIncrement = ()=>{
    this.setState(prevState => ({
      bad: prevState.bad + 1, 
    }))
  }

  countTotalFeedback =()=>{
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage=()=>{
    const sumNeutralBad = this.state.neutral + this.state.bad;
    if(sumNeutralBad===0){
      return 0
    }
    return this.state.good / sumNeutralBad * 100;
  }


  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type='button' onClick={this.handleGoodIncrement}>Good</button>
          <button type='button' onClick={this.handleneutralIncrement}>Neutral</button>
          <button type='button' onClick={this.handlebadIncrement}>Bad</button>
        </div>
        <div>
          <h1>Statistics</h1>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
