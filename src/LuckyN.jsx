import { useState } from 'react'
import Dice from './Dice'
import { getRolls } from './utils';
import Button from './Button';

export default function LuckyN({ numDices = 2, title = "Dice Game", winCheck }) {
    const [dice, setDice] = useState(getRolls(numDices));
    const isWinner = winCheck(dice);
    return (
        <div className="Lucky">
            <h1>{title}</h1>
            {isWinner && <h2>YOU WIN !!</h2>}
            <Dice dice={dice} />
            <Button clickFunc={() => setDice(getRolls(numDices))} />
        </div>
    )
}