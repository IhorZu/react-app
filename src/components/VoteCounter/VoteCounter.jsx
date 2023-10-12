import VoteItem from '../VoteItem/VoteItem';
import './VoteCounter.scss';

const emojis = [
    {
        id: 1,
        label: '😉',
        votes: 0
    },
    {
        id: 2,
        label: '😍',
        votes: 0
    },
    {
        id: 3,
        label: '😂',
        votes: 0
    },
    {
        id: 4,
        label: '😢',
        votes: 0
    },
    {
        id: 5,
        label: '😡',
        votes: 0
    },
];

const VoteCounter = () => {
    return (
        <ul className="votes">
            {
                emojis.map((emoji) => (
                    <VoteItem key={emoji.id} label={emoji.label} votes={emoji.votes} />
                ))
            }
        </ul>
    );
}

export default VoteCounter;
