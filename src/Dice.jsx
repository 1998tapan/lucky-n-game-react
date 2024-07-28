import "./Dice.css";
import Die from "./Die";

export default function Dice({ dice, color }) {
    return (
        <div className="Dice">
            {dice.map(die => (<Die val={die} />))}
        </div>
    )
}