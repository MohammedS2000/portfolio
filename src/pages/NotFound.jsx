import { useContext } from "react";
import { DarkModeContext } from "../component/DarkToggle";
import { BsFillMoonStarsFill , BsFillFlagFill, BsFlagFill } from "react-icons/bs";

export default function NotFound(){
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return(
        <div className="min-h-screen">
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-violet-800 cursor-pointer duration-500 rounded-full border-violet-800 border-2 w-12 h-12 px-3 dark:hover:text-white hover:text-white hover:bg-violet-800 fixed bottom-5 right-5 dark:text-violet-800"/>                  
        <div className={darkMode ? "dark bg-gray-900" : ""}>
                <main className="px-10 container mx-auto font-mono dark:bg-gray-900 pt-16">
                    <div className="text-center">
                    <BsFlagFill className="text-violet-800 mx-auto text-5xl"/>
                    <h1 className="text-5xl font-semibold  text-violet-800 py-3">Error 404</h1>
                    <h3 className="text-2xl py-2 dark:text-white">It looks like something went wrong.</h3>
                    </div>
                </main>
                </div>
                </div>
    );
}