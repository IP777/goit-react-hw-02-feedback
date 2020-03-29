import React from 'react';
import PropTypes from 'prop-types';
//-------------------------------------------------
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button
      className={style.feedbackBtn}
      type="button"
      onClick={onLeaveFeedback}
    >
      {options}
    </button>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
