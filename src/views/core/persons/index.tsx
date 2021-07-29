import Header from '../../../components/Header';
import SearchPersons from '../../../components/searchPersons';

import './styles.scss'

const Persons: React.FC = () => {
    return <div className={"holder"}>
        <Header isPublic={false} />
        <SearchPersons />
    </div>
}

export default Persons;