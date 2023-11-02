import { useState } from 'react';


const VoteItem = (props) => {
    const emoji = {
        ...props,
    };

    const [votes, setVotes] = useState(emoji.votes);

    const increaseVote = () => {
        setVotes((prevState) => prevState + 1);
        emoji.votes += votes + 1;
    };

    return (
        <li key={emoji.id} className="votes__item">
            <button onClick={increaseVote} className="votes__btn">{emoji.label}</button>
            <span className="votes__number">{votes}</span>
        </li>
    );
}

export default VoteItem;
