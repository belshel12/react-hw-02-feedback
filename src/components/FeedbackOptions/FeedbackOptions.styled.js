import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const FeedbackButton = styled.button`
  min-width: 160px;
  padding: 6px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  background-color: #2196f3;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 28px;

  &:hover {
    background-color: #188ce8;
    scale: 1.1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
