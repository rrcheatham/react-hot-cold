import React from 'react';

import GuessNum from './guess-num';
import Guesses from './guesses';

export default function StatusSection(props) {
    const guesses = props.guesses;
    const guessNum = guesses.length;

    return (
        <div>
            <GuessNum guessNum={guessNum}/>
            <Guesses guesses={guesses}/>
        </div>
    );
}