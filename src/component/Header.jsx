
import { useContext , useState } from "react";
import { DarkModeContext } from "./DarkToggle";
import { HiMenu, HiX } from "react-icons/hi";
import {motion, AnimatePresence} from "framer-motion";
import {Link} from "react-router-dom";

export default function Header() {

    const { darkMode } = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={darkMode ? "dark bg-gray-900" : ""}>
            <div className="px-10 container  mx-auto font-mono">
                <nav className="flex  justify-between py-10">
                    
                    <h1 className="text-xl font-bold p-2 z-50 text-violet-800 duration-500 rounded-full px-4 hover:text-white hover:bg-violet-800 border-violet-800 border-2 ml-3">
                        M
                    </h1>

                  
                    <ul className="hidden md:flex items-center text-xl">
                        <li>
                            <Link to="/Home" className="p-3 text-violet-800 duration-500 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2 ml-3 ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Project" className="p-3 text-violet-800 duration-500 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2 ml-3 ">
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="p-3 duration-500 text-violet-800 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2 ml-3 ">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-violet-800 z-50 text-3xl focus:outline-none">
                            {isOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </nav>
                <AnimatePresence>
                {isOpen && (
                    <motion.ul
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{y:"-100%", opacity: 0}}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="md:hidden z-40  flex w-full flex-col absolute pt-28 top-0 right-0 space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-xl">
                        <li>
                            <Link to="/Home" onClick={() => setIsOpen(false)} className="block p-3 text-violet-800 duration-500 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Project" onClick={() => setIsOpen(false)} className="block p-3 text-violet-800 duration-500 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2">
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" onClick={() => setIsOpen(false)} className="block p-3 text-violet-800 duration-500 rounded-full hover:text-white hover:bg-violet-800 border-violet-800 border-2">
                                Contact Me
                            </Link>
                        </li>
                    </motion.ul>
                )}
                </AnimatePresence>
            </div>
        </div>
    );
}
