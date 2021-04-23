import PropTypes from "prop-types";
import { statisticsWrapper, statisticsItem } from "./Statistics.module.css";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={statisticsWrapper}>
      <span className={statisticsItem}>Good: {good}</span>
      <span className={statisticsItem}>Neutral: {neutral}</span>
      <span className={statisticsItem}>Bad: {bad}</span>
      <span className={statisticsItem}>Total: {total()}</span>
      <span className={statisticsItem}>
        Positive Percentage: {positivePercentage()}
      </span>
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
