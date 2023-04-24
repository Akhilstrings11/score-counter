import React, {useState} from 'react'

function BodyPage() {
const [score, setscore] = useState(0);
const [wickets, setWickets] = useState(0);
const [Fours, setFours] = useState(0);
const [sixes, setSixes] = useState(0);


    // let score = 257;
    // const wickets = 4;

    const increaseCountOne = () => {
        setscore(score + 1)
    }

    const increaseCountTwo = () => {
        setscore(score + 2)
    }

    const increaseCountThree = () => {
        setscore(score + 3)
    }

    const increaseCountFour = () => {
        setscore(score + 4)
    }

    const increaseCountSix = () => {
        setscore(score + 6)
    }

    const AddWicket = () => {
        setWickets(wickets + 1)
    }

    const AddOneFour = () => {
        setFours(Fours + 1)
    }

    const AddOneSix = () => {
        setSixes(sixes + 1)
    }


    return (
        <div className='body'>
            <h2>{score}/{wickets}</h2>
            <button onClick={increaseCountOne}>+1</button>
            <button onClick={increaseCountTwo}>+Two</button>
            <button onClick={increaseCountThree}>+Three</button>
            <button onClick={increaseCountFour}>+Four</button>
            <button onClick={increaseCountSix}>+Six</button>

            <div>
                <h2>Wickets Taken</h2>
                <button onClick={AddWicket}>+</button>
            </div>
            <div>
                <h2>Fours:- <h3>{Fours}</h3> </h2>
                <button onClick={AddOneFour}>+</button>
            </div>
            <div>
                <h2>Sixes:- <h3>{sixes}</h3></h2>
                <button onClick={AddOneSix}>+</button>
            </div>
        </div>
    )
}

export default BodyPage
