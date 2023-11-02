import { useState } from 'react';


const TextField = () => {
    const [text, setText] = useState('');

    const updateText = (event) => {
        const updatedText = event.target.value;
        setText(updatedText);
    };

    return (
        <>
            <input type="text" onChange={updateText} />
            <p>Entered text: {text}</p>
        </>
    );
}

export default TextField;
