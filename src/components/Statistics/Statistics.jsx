const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        <h3>Good: {good}</h3>
      </li>
      <li>
        <h3>Neutral: {neutral}</h3>
      </li>
      <li>
        <h3>Bad: {bad}</h3>
      </li>
      <li>
        <h3>Total: {total}</h3>
      </li>
      <li>
        <h3>Positive feedback: {positivePercentage || good}%</h3>
      </li>
    </ul>
  );
};

export default Statistics;
