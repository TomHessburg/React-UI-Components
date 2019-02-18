import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-wrapper">
      <CalculatorDisplay number={0}/>
      <ActionButton buttonStyle={"action-button"} number={"clear"} />
      <NumberButton buttonStyle={"math-button"} number={"÷"} />

      <NumberButton buttonStyle={"number-button"} number={"7"} />
      <NumberButton buttonStyle={"number-button"} number={"8"} />
      <NumberButton buttonStyle={"number-button"} number={"9"} />

      <NumberButton buttonStyle={"math-button"} number={"x"} />

      <NumberButton buttonStyle={"number-button"} number={"4"} />
      <NumberButton buttonStyle={"number-button"} number={"5"} />
      <NumberButton buttonStyle={"number-button"} number={"6"} />

      <NumberButton buttonStyle={"math-button"} number={"-"} />

      <NumberButton buttonStyle={"number-button"} number={"1"} />
      <NumberButton buttonStyle={"number-button"} number={"2"} />
      <NumberButton buttonStyle={"number-button"} number={"3"} />

      <NumberButton buttonStyle={"math-button"} number={"+"} />

      <ActionButton buttonStyle={"action-button"} number={"0"} />
      <NumberButton buttonStyle={"math-button"} number={"="} />
    </div>
  );
};

export default App;
