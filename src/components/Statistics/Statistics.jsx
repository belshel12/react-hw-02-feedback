import {
  StatisticList,
  StatisticItem,
  StatisticOption,
  StatisticValue,
} from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <StatisticItem>
        <StatisticOption>Good:</StatisticOption>
        <StatisticValue>{good}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticOption>Neutral:</StatisticOption>
        <StatisticValue>{neutral}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticOption>Bad:</StatisticOption>
        <StatisticValue>{bad}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticOption>Total:</StatisticOption>
        <StatisticValue>{total}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticOption>Positive feedback:</StatisticOption>
        <StatisticValue>{positivePercentage || good}%</StatisticValue>
      </StatisticItem>
    </StatisticList>
  );
};

export default Statistics;
