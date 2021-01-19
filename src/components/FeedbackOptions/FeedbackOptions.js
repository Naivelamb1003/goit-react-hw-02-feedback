import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button type="button" onClick={onLeaveFeedback} value={option}>{option}</button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

// <button type='button' onClick={this.handleGoodIncrement}>Good</button>
// <button type='button' onClick={this.handleneutralIncrement}>Neutral</button>
// <button type='button' onClick={this.handlebadIncrement}>Bad</button>
