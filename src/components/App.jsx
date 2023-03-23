
import { useState } from "react";
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  const onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  // function onLeaveFeedback (event) {
  //   console.dir(event)
  // }
  

  return <Section title="Please leave feedback">
                <FeedbackOptions
      options={Object.keys(options)}
    onLeaveFeedback={onLeaveFeedback} 
    />
          </Section>
}
export class OldApp extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * "100");

  };
  render() {
    return <> <Section title="Please leave feedback">
                <FeedbackOptions
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.onLeaveFeedback} />
              </Section>
              <Section >
                {this.countTotalFeedback() ?
                  <Statistic
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} /> :
                  <Notification message="There is no feedback" />}
      </Section>
      <App/>
            </>
  }
};
