import { Container } from "./Statistics.styled";
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <span>Bad: {bad}</span>
      <span>Neutral: {neutral}</span>
      <span>Good: {good}</span>
      <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
    </Container>
  );
};



