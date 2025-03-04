import { useContext } from "react";
import { DarkModeContext } from "../component/DarkToggle";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Contact(){
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  
    return (
      <div className="dark:bg-gray-900"> 
      <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-violet-800 cursor-pointer rounded-full duration-500 border-violet-800 border-2 w-12 h-12 px-3 dark:hover:text-white hover:text-white hover:bg-violet-800 fixed bottom-5 right-5 dark:text-violet-800"/>
  
      <div className={darkMode ? "dark bg-gray-900" : ""}>
        <main className="px-10 container pt-16 mx-auto font-mono dark:bg-gray-900">
          <section className="min-h-screen">
            <h1 className="text-center text-violet-800 text-5xl font-bold mb-10">Contact Me</h1>
            <div className="flex flex-col lg:flex-row sm:text-center sm:items-center lg:items-start lg:text-left justify-between gap-8">  
            <div className="xl:w-2/4 mb-16">
                <h1 className="text-5xl font-semibold py-2 text-black dark:text-white">Send me a message or contact me at the following <br/><span className="text-violet-800">E-mail:</span></h1>
                <h3 className="text-2xl py-2 dark:text-white hover:animate-pulse hover:scale-105 duration-500">mohammedsamiawad2000@gmail.com</h3>
            </div>
            <form className="w-fit bg-gray-100 dark:bg-gray-700 shadow-md rounded-3xl py-5 px-12"> 
                <h2 className="text-2xl py-2 mb-2 dark:text-white">Send me a message</h2>
                <input type="text" size='33' placeholder="Full Name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 my-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-800 " /><br/>
                <input type="email" size='33' placeholder="E-mail address" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 my-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-800 " /><br/>
                <input type="text" size='33' placeholder="Subject" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 my-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-800 " />
                <p className="text-xl dark:text-white my-3">Tell me about your project</p>
                <textarea rows='8' cols='32' className="bg-gray-200  appearance-none border-2 border-gray-200 rounded  py-2 my-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-800"></textarea><br/>
                <button className="p-3 text-white duration-500 bg-violet-800 rounded-full hover:bg-violet-500  ml-3 ">Submit Message</button>
            </form>
            </div>
          </section>  
        </main>
      </div>
      </div>
    )
}