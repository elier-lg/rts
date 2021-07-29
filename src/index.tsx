import ReactDOM from "react-dom";
// import Dashboard from "./views/dashboard";
import CreateUser from "./views/createUser";
import { Provider } from 'react-redux'
import { store } from './state'
import "./assets/scss/base.scss";

const RTS = () => {
    return (
        <Provider store={store}>
            <CreateUser />
        </Provider>
    );
};

ReactDOM.render(<RTS />, document.querySelector('#root'));