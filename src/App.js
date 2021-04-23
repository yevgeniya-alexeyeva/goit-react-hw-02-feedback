import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countVoices = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? Math.floor((this.state.good / this.countTotalFeedbacks()) * 100) + "%"
      : "no good feedbacks";
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.countVoices}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedbacks() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
