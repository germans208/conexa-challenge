import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConexaProvider } from "./context";

ReactDOM.render(
    <ConexaProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ConexaProvider>,
    document.getElementById("root")
);
