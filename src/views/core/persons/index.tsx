import Header from '../../../components/Header';
import SearchPersons from '../../../components/searchPersons';

import styles from './styles.module.scss';

const Persons: React.FC = () => {
  return (
    <div className={styles.holder}>
      <Header isPublic={false} />
      <SearchPersons />
    </div>
  );
};

export default Persons;
