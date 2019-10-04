import React from 'react';

export default function Dashboard (props) {
    return (
        <div>
            <button onClick={props.setBall}>Ball</button>
            <button onClick={props.setStrike}>Strike</button>
            <button onClick={props.setFoul}>Foul</button>
            <button onClick={props.setHit}>Hit</button>
        </div>
    );
}
