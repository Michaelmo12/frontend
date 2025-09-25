import { useState } from "react";

export default function ToggleText(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(props.visible);
    return (
        <div>
           <h1>Toggle Text Component</h1>
           {isVisible && <p>Hello React!</p>}
           <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Text
           </button>

           <button onClick={() => setIsVisible2(!isVisible2)}>
            {isVisible2 ? "Hide" : "Show"} Text from Props
           </button>
           {isVisible2 && <p>Hello from Props!</p>}
        </div>
    );
}

