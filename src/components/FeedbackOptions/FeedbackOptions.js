import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.conteiner}>
      {options.map((option) => (
        <button type="button" onClick={onLeaveFeedback} value={option} className={styles.bt}>{option}</button>
      ))}
    </div>
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
