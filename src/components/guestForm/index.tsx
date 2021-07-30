import AddGuest from '../addGuest';
import SearchBox from '../searchBox';
import Header from '../../components/Header';
import { Person } from '../../state/interfaces';

const GuestForm: React.FC = () => {
  return (
    <div>
      <Header
        isPublic={false}
        loggedPerson={{ fullName: 'Pepe el Toro' } as Person}
      />

      <SearchBox />
      <AddGuest />
    </div>
  );
};

export default GuestForm;
