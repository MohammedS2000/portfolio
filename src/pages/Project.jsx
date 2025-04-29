import TripTailor from "../images/TripTailor.png";
import Ecommerce from "../images/Ecommerce.png"
import ToDoList from "../images/ToDoList.png"
import ProjectGrid from "../component/ProjectGrid";

export default function Project() {


  const projects = [
    {
      image: TripTailor,
      name: "Trip Tailor",
      description: "Trip planner app made with react native using gemini AI.",
    },
    {
      image: Ecommerce,
      name: "Ecommerce",
      description: "Eccomerce web page made with reactjs",
    },
    {
      image: ToDoList,
      name: "ToDo List",
      description: "A simple ToDo list made with reactjs as a small task",
    },
  ]

  return (
    <div>
      <main className="px-10 container pt-16 mx-auto font-mono dark:bg-gray-900">
        <section className="min-h-screen">
          <div className="mb-3 text-center">
            <h1 className="text-center text-violet-800 text-5xl font-bold mb-5">My Projects</h1>
            <p className="text-md mb-5 leading-8 text-gray-800 dark:text-gray-400">Here is all my projects that i did for myself or other clint, with information <br />about each project</p>
          </div>

          <ProjectGrid projects={projects} />

        </section>
      </main>
    </div>
  )
}