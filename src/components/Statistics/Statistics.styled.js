import styled from "styled-components";

export const StatisticList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatisticItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.17;
  letter-spacing: 0.03em;
`;

export const StatisticOption = styled.h4`
  margin: 0;
`;

export const StatisticValue = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const Message = styled.p`
  font-size: 24px;
  margin: 0;
  color: tomato;
`;
