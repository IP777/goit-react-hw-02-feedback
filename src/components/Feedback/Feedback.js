import React, { Component } from 'react';
import PropTypes from 'prop-types';
//--------------------------------------------------------------
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class MyClassComponent extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handelbarGoodInc = e => {
    this.setState(state => ({
      good: state.good + 1,
      total: state.good + state.neutral + state.bad,
    }));
  };
  handelbarNeutralInc = e => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };
  handelbarBadInc = e => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, b, c) => {
    const total = a + b + c;
    const percent = (a / total) * 100;

    return Math.round(percent) + '%';
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={'Good'}
            onLeaveFeedback={this.handelbarGoodInc}
          />
          <FeedbackOptions
            options={'Neutral'}
            onLeaveFeedback={this.handelbarNeutralInc}
          />
          <FeedbackOptions
            options={'Bad'}
            onLeaveFeedback={this.handelbarBadInc}
          />
        </Section>

        <Section title="Statistics">
          <div className="textArr">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad,
              )}
            />
          </div>
        </Section>
      </>
    );
  }
}
