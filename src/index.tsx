import ReactDOM from "react-dom";
import RTS from "./views";
import { Provider } from 'react-redux'
import { store } from './state'
import "./assets/scss/base.scss";

const App = () => {
    return (
        <Provider store={store}>
            <RTS />
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));