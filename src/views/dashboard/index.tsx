import Header from '../../components/Header';
import UsersList from '../../components/usersList';

import './styles.scss'

const Dashboard: React.FC = () => {
    return <div className={"holder"}>
        <Header isPublic={false} />
        <UsersList />
    </div>
}

export default Dashboard;