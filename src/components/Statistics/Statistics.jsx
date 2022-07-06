import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.feedbacksList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total} </li>
      <li>Positive Feedback: {positivePercentage}</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

/* <ul className="feedbacksList">
  <li>Good: {this.state.good}</li>
  <li>Neutral: {this.state.neutral}</li>
  <li>Bad: {this.state.bad}</li>
  <li>Total: {total} </li>
  <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
</ul>; */