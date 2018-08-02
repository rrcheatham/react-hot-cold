import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onMakeGuess) {
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }
        this.input.value = '';
        this.input.focus();
    }
    
    render() {
        return (
            <form className="guess-form"
                onSubmit={e => this.onSubmit(e)}>
                <input className="guess" type="number" placeholder="Enter Your Guess" min="1" max="100"
                    ref={input => (this.input = input)}
                    required
                />
                <input className="submit" type="submit" name="submit" value="Guess" />
            </form>
        );
    }
}