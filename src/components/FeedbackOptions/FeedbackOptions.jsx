export const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <div>
      <button type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
    </div>
  )
}