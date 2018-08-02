import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    const { feedback, guessNum } = props;
    return (
        <div>
            <Feedback feedback={feedback} guessNum={guessNum}/>
            <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)}/>
        </div>
    );
}