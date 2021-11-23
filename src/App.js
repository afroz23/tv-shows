import React, { useState } from "react";
import Fetchdata from "./Component/Fetchdata";

function App() {
    const [visible, setVisible] = useState(false);
    let buttonText = visible ? "light" : "dark";
    const handleButton = () => {
        let handle = document.querySelector("#dark");
        if (!visible) {
            handle.classList.add("dark");
        } else {
            handle.classList.remove("dark");
        }
        setVisible(!visible);
    };

    return (
        <div
            id="dark"
            className="w-screen bg-red-500 h-full flex flex-col justify-center App center dark:bg-gray-400"
        >
            <button
                onClick={handleButton}
                className="dark:text-white dark:bg-primary w-40 m-3 center bg-transparent bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                {buttonText}
            </button>
            <Fetchdata className="dark:bg-primary" />
        </div>
    );
}

export default App;
