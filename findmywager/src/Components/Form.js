import React from 'react';

function WagerForm(props){

    const {wagerInfo, setWagerInfo} = props;
    
    const handleChange = (event) => {
        setWagerInfo({
            ... wagerInfo,
            [event.target.name]: event.target.value
        })
    }

    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let isNegative = wagerInfo.odds > 0 ? false: true;
        let decimalVal;
        if (isNegative) {
            decimalVal = -(100/wagerInfo.odds);
            console.log(Number(wagerInfo.supposedWinning/decimalVal))
            console.log(Number(wagerInfo.supposedWinning))
            console.log(roundToTwo(Number(wagerInfo.supposedWinning/decimalVal) + Number(wagerInfo.supposedWinning)))
            setWagerInfo({
                ... wagerInfo,
                newBet: roundToTwo(wagerInfo.supposedWinning/decimalVal),
                totalWinning: roundToTwo(Number(wagerInfo.supposedWinning/decimalVal) + Number(wagerInfo.supposedWinning))
            })
            return;
        } else {
            decimalVal = wagerInfo.odds/100;
            console.log(Number(wagerInfo.supposedWinning/decimalVal))
            console.log(Number(wagerInfo.supposedWinning))
            console.log(roundToTwo(Number(wagerInfo.supposedWinning/decimalVal) + Number(wagerInfo.supposedWinning)))
            setWagerInfo({
                ...wagerInfo,
                newBet: roundToTwo(wagerInfo.supposedWinning/decimalVal),
                totalWinning: roundToTwo(Number(wagerInfo.supposedWinning/decimalVal) + Number(wagerInfo.supposedWinning))
            })
            return;
        }
    }





    return (
        <form>
            <p> Winning Wanted:</p>
            <input name="supposedWinning" value={wagerInfo.supposedWinning} onChange={handleChange} />
            <p> Odds: </p>
            <input name="odds" value={wagerInfo.odds} onChange={handleChange}/>
            <button className="button" onClick={handleSubmit}>Find My Wager</button>
            <p> New Bet:</p>
            <p>{wagerInfo.newBet}</p>
            <p> Total winnings:</p>
            <p>{wagerInfo.totalWinning}</p>
        </form>
    )
}

export default WagerForm;