import React, { Component } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVoteCounter = e => {
    const selectedFeedback = e.currentTarget.value;
    console.log(
      'кликнули в кнопку ',
      selectedFeedback,
      typeof selectedFeedback
    );

    // selectedFeedback === 'good' &&
    this.setState(prev => ({
      // ДОДУМАТИ ЯК ЗАДАТИ ЗНАЧЕННЯ КЛЮЧА ЧЕРЕЗ ЗМІННУБ ЩОБ НЕ ПРОПИСУВАТИ СЕТСТЕЙТ ДЛЯ КОЖНОЇ КНОПКИ ОКРЕМО
      [selectedFeedback]: prev[selectedFeedback] + 1, // УРА! ПЕРЕМОГА ;))
    }));

    // selectedFeedback === 'good' &&
    // this.setState(prev => ({
    //   good: prev.good + 1, //УРАА ;))
    // }));

    // selectedFeedback === 'neutral' &&
    //   this.setState(prev => ({
    //     neutral: prev.neutral + 1,
    //   }));

    // selectedFeedback === 'bad' &&
    //   this.setState(prev => ({
    //     bad: prev.bad + 1,
    //   }));
  };

  countTotalFeedback = () => {
    // console.log(this.state);
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;

    return total !== 0 ? `${Math.round((this.state.good / total) * 100)}%` : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        {/* <h2 className="title">Please leave feedback</h2> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            // options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleVoteCounter}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
