//archivo index.js
import React from "react"; //IMPORTAMOS REACT
import { ReactDOM } from "./react-dom/client"; //IMPORTAMOS EL DOM PARA LA RENDERIZACION

import {App} from "./hello-word.js"
//componente
function App(){
    return (<h1> hello WORD!!</h1>);
}
//RENDERIZACION
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        </React.StrictMode>
);