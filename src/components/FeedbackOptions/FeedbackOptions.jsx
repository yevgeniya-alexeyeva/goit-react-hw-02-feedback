import PropTypes from "prop-types";
import { feedbackWrapper, button } from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={feedbackWrapper}>
      {options.map((option) => {
        return (
          <button
            onClick={onLeaveFeedback}
            name={option}
            className={button}
            type="button"
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
