import AddGuest from "../addGuest";
import SearchBox from "../searchBox";
import Header from "../../components/Header";
import { headerProps } from '../../interfaces'


const GuestForm: React.FC = () => {

    const headerPropsIn = {
        isPublic: false,
    } as headerProps;

    return <div>
        <Header {...headerPropsIn} />
        <SearchBox />
        <AddGuest />
    </div>

}

export default GuestForm;