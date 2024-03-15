import Description from './description';
import Options from './options';
import Feedback from './feedback';
import Notification from './notification';
import { useState, useEffect } from 'react';

const App = () => {
  const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };
  const [feedbackOptions, setFeedbackOptions] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    const parsedFeedback = JSON.parse(savedFeedback) ?? initialFeedbacks;
    return parsedFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem(
      'saved-feedback',
      JSON.stringify(feedbackOptions)
    );
  }, [feedbackOptions]);

  const updateFeedback = feedbackType => {
    setFeedbackOptions({
      ...feedbackOptions,
      [feedbackType]: feedbackOptions[feedbackType] + 1,
    });
  };

  const handleResetFeedbaks = () => {
    setFeedbackOptions(initialFeedbacks);
  };

  const totalFeedbacks = Object.values(feedbackOptions).reduce(
    (total, curr) => total + curr,
    0
  );

  const positiveFeedbacks = feedbacks => {
    if (feedbacks === 0) return;

    return Math.round(
      ((totalFeedbacks - feedbacks.bad) / totalFeedbacks) * 100
    );
  };

  return (
    <>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        resetFeedbacks={handleResetFeedbaks}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedbackOptions}
          total={totalFeedbacks}
          positive={positiveFeedbacks(feedbackOptions)}
        />
      )}
    </>
  );
};

export default App;
