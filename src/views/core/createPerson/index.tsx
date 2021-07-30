import Header from '../../../components/Header';
import { useState } from 'react';
import { useActions } from '../../../hooks';
import { Person } from '../../../state/interfaces';
import './styles.scss';
import { Checkbox } from '@material-ui/core';

const fields = {
  firstName: 'firstName',
  lastName: 'lastName',
  isNotificationEnabled: 'isNotificationEnabled',
};

const initialPersonState = {
  firstName: '',
  lastName: '',
  isNotificationEnabled: false,
};

const CreatePerson: React.FC = () => {
  const [person, setUser] = useState<Person>(initialPersonState as Person);
  const { addUser } = useActions();

  const hanldeOnchange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...person, [field]: e.target.value } as Person);
    };

  const hanldeOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addUser(person as Person);
  };

  return (
    <div className={'holder'}>
      <Header isPublic={false} loggedPerson = {{ fullName: 'Pepe el Toro' } as Person} />
      <form>
        <input
          placeholder="First Name"
          value={person?.firstName}
          onChange={hanldeOnchange(fields.firstName)}
        />
        <input
          placeholder="Last Name"
          value={person?.lastName}
          onChange={hanldeOnchange(fields.lastName)}
        />

        <Checkbox
          placeholder="First Name"
          value={person?.isNotificationEnabled}
          onChange={hanldeOnchange(fields.isNotificationEnabled)}
        />

        <button type="submit" onClick={hanldeOnSubmit}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreatePerson;
