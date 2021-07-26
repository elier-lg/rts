import ReactDOM from "react-dom";
import GuestForm from "./components/guestForm";

const RTS = () => {
    return (
        <div>
            <GuestForm/>
        </div>
    );
};

ReactDOM.render(<RTS />, document.querySelector('#root'));