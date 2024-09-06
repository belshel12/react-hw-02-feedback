const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = ({ target: { name } }) => {
    onLeaveFeedback(name);
  };

  return (
    <div>
      {options.map((option) => (
        <button key={option} type="button" name={option} onClick={handleClick}>
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
