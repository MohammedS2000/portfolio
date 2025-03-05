import { AiFillGithub, AiOutlineX, AiFillLinkedin } from "react-icons/ai";
import wave from "../images/wave.png";
import {Typewriter} from 'react-simple-typewriter';

export default function Home() {

    return (
        <div>



           
                <main className="px-10 container mx-auto font-mono dark:bg-gray-900">
                    <section className="min-h-screen">
                        <div className="2xl:flex  justify-between gap-44 py-16">
                            <div className="text-center 2xl:w-2/3">

                                <h2 className="text-2xl py-2 dark:text-white">
                                    Welcome to My Portfolio
                                </h2>
                                <h1 className="text-5xl font-semibold  text-violet-800 py-3 border-1">
                                    {''}
                                    <Typewriter
                                        words={['My Name is Mohammed Sami', 'Im a Web Developer']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={400}
                                    />
                                </h1>
                               
                                <p className="text-md py-5 mb-5 leading-8 text-gray-800 dark:text-gray-400">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae veniam illo iste pariatur labore corrupti ad quibusdam nobis sunt esse? Nobis atque deleniti cum perspiciatis incidunt explicabo accusamus placeat, saepe.
                                </p>

                                <div className="text-violet-800 flex justify-center gap-16 text-4xl py-5 cursor-pointer mb-10">
                                    <a href="https://x.com/itz_m7mds" target="_blank" className="hover:animate-pulse duration-500 hover:scale-110">
                                        <AiOutlineX className="border-1" />
                                    </a>
                                    <a href="https://github.com/MohammedS2000?tab=repositories" target="_blank" className="hover:animate-pulse duration-500 hover:scale-110">
                                        <AiFillGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" className="duration-500 hover:animate-pulse hover:scale-110">
                                        <AiFillLinkedin />
                                    </a>
                                </div>
                            </div>

                            <div className="relative mx-auto bg-gradient-to-b  from-violet-800 rounded-full overflow-hidden h-80 w-80 items-center 2xl:w-96 2xl:h-96 sm:my-10 2xl:my-0">
                                <img src={wave} alt="waving-man" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        
    );
}
