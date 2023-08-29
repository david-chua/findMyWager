import React from 'react';

function Instructions(props){
    return(
        <div>
            <h1> Find My Wager </h1>
            <p>
                In winnings wanted, place the amount you want to win. 
            </p>
            <p>
                In odds, place the betting odds
            </p>
            <p>
                Click on Find my wager. 
            </p>
            <p>
                <strong>Baseball sample:</strong> <br/>
                First Inning: 10 wins 9 for a return of 19<br/>
                If it loses, place 19 on winnings wanted<br/>
                Add the odds and find your new wager for the next play.
                
            </p>
        </div>
    )
}

export default Instructions;