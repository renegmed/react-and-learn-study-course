import { useState } from 'react';

const GuestList: React.FC = () => {

    const [name, setName] = useState("");  // initial value of name
    const [guests, setGuests] = useState<string[]>([]);
    const onClick = () => {
        setName('');
        setGuests([...guests, name])  // ... means add new element to existing guests array

    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map((guest) => (
                <li key={guest}>{guest}</li>
            )) }
        </ul>
        <input value={name} 
            onChange={(e) => setName(e.target.value)} />

        <button onClick={onClick}>Add Guest</button>
        </div>;
};

export default GuestList;