import { FeedbackButton, FeedbackContainer } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = ({ target: { name } }) => {
    onLeaveFeedback(name);
  };

  return (
    <FeedbackContainer>
      {options.map((option) => (
        <FeedbackButton key={option} type="button" name={option} onClick={handleClick}>
          {option[0].toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

export default FeedbackOptions;
