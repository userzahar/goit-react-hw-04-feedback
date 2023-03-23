
import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";

 export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
   const options = { good, neutral, bad };
   console.log(good+neutral+bad)
   const onLeaveFeedback = ({ target }) => {
     switch (target.name) {
       case "good": setGood(state => state+1)
         break;
       case "neutral": setNeutral(state => state+1)
         break;
       case "bad": setBad(state => state+1)
         break;
       default: ;
      }
   };
   const countTotalFeedback = () => {
    return (good + neutral + bad);
   };
   const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };
    
   return <>
     <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}/>
   </Section>
   <Section>
          {countTotalFeedback() ?
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()} /> :
            <Notification message="There is no feedback" />}
        </Section>
   </>
  }
