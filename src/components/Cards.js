import React, { useState } from 'react';
import data from './data';
import './cards.css';

const Cards = () => {
    // Initialize state to track whether each card's answer is visible or hidden
    const [visibleAnswers, setVisibleAnswers] = useState(data.map(() => false));

    // Function to toggle the visibility of the answer for a specific card
    const toggleAnswer = (index) => {
        setVisibleAnswers(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="cardContainer">
            {data.map((item, index) => (
                <div className="eachCard" key={item.id}>
                    {/* Toggle the answer visibility when the question is clicked */}
                    <h2 id="cardQuestion" onClick={() => toggleAnswer(index)}>{item.question}</h2>
                    {/* Render the answer only if its visibility state is true */}
                    {visibleAnswers[index] && <p id="cardAnswer">{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default Cards;
