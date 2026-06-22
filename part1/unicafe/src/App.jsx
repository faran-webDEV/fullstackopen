import { useState } from "react";

const Button = ({ clickAction, text }) => {
  return (
    <>
      <button onClick={clickAction}>{text}</button>
    </>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  averageScore,
  positiveFeedback,
}) => {
  if (total > 0) {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} symbol="" />
            <StatisticLine text="neutral" value={neutral} symbol="" />
            <StatisticLine text="bad" value={bad} symbol="" />
            <StatisticLine text="all" value={total} symbol="" />
            <StatisticLine text="average" value={averageScore()} symbol="" />
            <StatisticLine
              text="positive"
              value={positiveFeedback()}
              symbol="%"
            />
          </tbody>
        </table>
      </>
    );
  } else {
    return <p>No feedback given.</p>;
  }
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.symbol}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const averageScore = () => {
    const average = (good * 1 + neutral * 0 + bad * -1) / total;
    return average;
  };

  const positiveFeedback = () => {
    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button clickAction={handleGood} text="good" />
      <Button clickAction={handleNeutral} text="neutral" />
      <Button clickAction={handleBad} text="bad" />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        averageScore={averageScore}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
};

export default App;
