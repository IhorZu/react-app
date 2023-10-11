import { useState } from 'react';


function VoteItem(props) {
    const [votes, setVotes] = useState(props.votes);

    const increaseVote = () => {
        setVotes(votes + 1);
        console.log(props.votes);
    };

    return (
        <li key={props.id} className="votes__item">
            <button onClick={increaseVote} className="votes__btn">{props.label}</button>
            <span className="votes__number">{votes}</span>
        </li>
    );
}

export default VoteItem;
