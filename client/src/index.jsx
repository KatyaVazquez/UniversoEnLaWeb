import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from './context/FirstContext';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById("root")).render(
    <CookiesProvider>
        <ContextProvider>
            <App />
        </ContextProvider>
    </CookiesProvider>

    );
