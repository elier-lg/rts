import { useState } from 'react';
import { useActions } from '../../hooks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Person } from '../../state/interfaces'

const SearchUsers: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchUsers } = useActions();
    const { data, error, loading } = useTypedSelector(state => state.users)

    const hanldeOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

    const hanldeOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        searchUsers(term);
    }


    return <>
        <form>
            <input value={term} onChange={hanldeOnchange} />
            <button type="submit" onClick={hanldeOnSubmit}> Search </button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && data.map((u: Person) => <div key={u.id}>  {u.fullName} </div>)}
    </>
}

export default SearchUsers;