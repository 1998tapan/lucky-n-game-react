import './App.css'
import LuckyN from './LuckyN'
import { sum } from "./utils"

const lessThan4 = (dice) => (sum(dice) < 4);
const allEqual = (dice) => (dice.every(val => val === dice[0]));

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} title="Roll less than 4 to WIN" />
      <LuckyN winCheck={allEqual} title="Roll the same number to WIN" numDices={3} />
    </>
  )
}

export default App
