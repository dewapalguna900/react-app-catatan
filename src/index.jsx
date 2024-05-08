import React from "react";
import { createRoot } from 'react-dom/client';
import CatatanApp from "./components/CatatanApp";
import './styles/style.css';

function MainElement(){
    return (
        <CatatanApp />
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<MainElement />);