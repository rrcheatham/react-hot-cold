import React from 'react';

import './feedback.css';

export default function Feedback(props) {
    return (
        <div className="feedback-box">
                {props.feedback}
        </div>
    );
}