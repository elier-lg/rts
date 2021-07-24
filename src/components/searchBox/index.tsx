import { useState } from 'react';

interface Guest {
    name: string;
    age: number;
}

let guests = [
    { name: 'elier', age: 20 },
    { name: 'juan', age: 20 },
    { name: 'pedro', age: 20 },
] as Guest[]


const SearchBox: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guest, setGuest] = useState<Guest | undefined>();


    const hanldeOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const hanldeOnclick = () => {
        const foundGuest = guests.find(g => g.name === name);
        setGuest(foundGuest);
    }


    return <>
        <input value={name} onChange={hanldeOnchange} />
        <button onClick={hanldeOnclick}> Search </button>
        <div>
            {guest && guest.name}
        </div>
    </>
}

export default SearchBox;