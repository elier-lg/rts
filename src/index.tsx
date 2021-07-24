import ReactDOM from "react-dom";
import GuestForm from "./components/guestForm";

const App = () => {
    return (
        <div>
            <GuestForm/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));