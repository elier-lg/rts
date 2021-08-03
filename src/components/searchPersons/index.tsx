import { useState } from 'react';
import { useActions } from '../../hooks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Person } from '../../state/interfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import styles from './styles.module.scss';

const SearchPersons: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchUsers } = useActions();
  const { data, error, loading } = useTypedSelector(state => state.users);

  const hanldeOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const hanldeOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchUsers(term);
  };

  const renderTable = () => {
    return (
      <Table className={styles.personsTable}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((u: Person) => (
            <TableRow key={u.id}>
              <TableCell component="th" scope="row">
                {u.fullName}
              </TableCell>
              <TableCell align="right">{u.phone}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={e => {
                    alert('Edit');
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className={styles.holder}>
      <form>
        <input value={term} onChange={hanldeOnchange} />
        <button type="submit" onClick={hanldeOnSubmit}>
          Search
        </button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && renderTable()}
    </div>
  );
};

export default SearchPersons;
