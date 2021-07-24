import { useState } from 'react'

const AddGuest: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [guests, setGuests] = useState<string[]>([])

    const hanldeOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const hanldeOnclick = () => {
        setGuests([...guests, name]);
    }

    return (
        <>
            <h3>Guests list</h3>
            <input value={name} onChange={hanldeOnchange} />
            <button value={name} onClick={hanldeOnclick}> Find user </button>
            <ul>
                {guests.map(g => <li key={g}>{g}</li>)}
            </ul>

        </>
    );
};

export default AddGuest;