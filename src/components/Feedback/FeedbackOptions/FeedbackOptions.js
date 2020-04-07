import React from 'react';
import PropTypes from 'prop-types';
//-------------------------------------------------
import style from './FeedbackOptions.module.css';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   console.log(onLeaveFeedback);
//   return (
//     <button
//       className={style.feedbackBtn}
//       type="button"
//       onClick={onLeaveFeedback}
//       name={options}
//     >
//       {options}
//     </button>
//   );
// };

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      className={style.feedbackBtn}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.protoTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
