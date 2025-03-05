import {BsFlagFill } from "react-icons/bs";

export default function NotFound(){
    

    return(
        <div className="min-h-screen">
        
                <main className="px-10 container mx-auto font-mono dark:bg-gray-900 pt-16">
                    <div className="text-center">
                    <BsFlagFill className="text-violet-800 mx-auto text-5xl"/>
                    <h1 className="text-5xl font-semibold  text-violet-800 py-3">Error 404</h1>
                    <h3 className="text-2xl py-2 dark:text-white">It looks like something went wrong.</h3>
                    </div>
                </main>
                </div>
                
    );
}