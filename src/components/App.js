import React from 'react';

import NavBar from './nav-bar.js';
import GuessSection from './guess-section';
import StatusSection from './status-section.js';

import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: Math.round(Math.random() * 100) + 1,
            feedback: 'Make A Guess',
            guesses: []
        };
    }

    restartGame() {
        this.setState({
            guesses: [],
            feedback: 'Make A Guess',
            number: Math.round(Math.random() * 100) + 1
        })
    }

    onMakeGuess(guess) {
        const difference = Math.abs(guess - this.state.number);

        let feedback;
        if (difference >= 50) {
            feedback = "Ice Cold";
        } else if (difference >= 30) {
            feedback = "Cold";
        } else if (difference >=10) {
            feedback = "Warm";
        } else if (difference >=1) {
            feedback = "Hot!";
        } else {
            feedback = "You got it!"
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

    }


    render() {
        const { feedback, guesses } = this.state;
        const guessNum = guesses.length;

        return (
            <body>
                <header>
                    <NavBar onRestartGame={() => this.restartGame()}/>
                </header>
                <main>
                    <h1>HOT OR COLD</h1>
                    <section className="game">
                        <GuessSection 
                            feedback={feedback}
                            guessNum={guessNum}
                            onMakeGuess={guess => this.onMakeGuess(guess)}
                        />
                        <StatusSection 
                            guesses={guesses}
                        />
                    </section>
                </main>
            </body>
        );
    }
}