import { Component } from "react";
import s from "./App.module.css";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (evt) => {
    console.log(evt.target.value);
    this.setState((prevState) => ({
      [evt.target.value]: prevState[evt.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const Total = this.countTotalFeedback();
    if (Total === 0) {
      return 0;
    }
    return (this.state.good / Total) * 100;
  };

  isStatistics() {
    return this.state.good !== 0 || this.state.neutral!==0 || this.state.neutral !== 0;
  }

  render() {

    return (
      <div >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.isStatistics() ? 
              <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
            : <Notification
            message="No feedback given"
            />}
      </div>
    );
  }
}

export default App;
