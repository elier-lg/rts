import Header from '../../components/Header';
import SearchUser from '../../components/searchUser';

import './styles.scss'

const Dashboard: React.FC = () => {
    return <div className={"holder"}>
        <Header isPublic={false} />
        <SearchUser />
    </div>
}

export default Dashboard;