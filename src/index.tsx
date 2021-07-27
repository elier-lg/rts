import ReactDOM from "react-dom";
import Dashboard from "./views/dashboard";
import { Provider } from 'react-redux'
import { store } from './state'
import "./assets/scss/base.scss";

const RTS = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
};

ReactDOM.render(<RTS />, document.querySelector('#root'));