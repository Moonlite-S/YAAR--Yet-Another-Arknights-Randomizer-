import { useState } from "react";
import "./loading_screens.css"

export function LoadingScreen() {
    // TODO:
    // - Create the classic Arknights loading screen
    // - Make a mockup using basic shapes first
    const LOADING_TIME = 5000;
    const [hide, setHidden] = useState('BackgroundLoadingScreen');

    const timer = setTimeout(() => {
        console.log('Queue transition to Main App');
        setHidden('BackgroundLoadingScreen hidden');
    }, LOADING_TIME);

    return(
        <>
        <div className={hide}>
            <div className="yellowbars">
            </div>
        </div>
        </>
    )
}