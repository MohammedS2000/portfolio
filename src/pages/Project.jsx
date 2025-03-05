import xLayout from "../images/xLayout.png";
import youtubeLayout from "../images/youtubeLayout.png"
import ToDoList from "../images/ToDoList.png"
import ProjectGrid from "../component/ProjectGrid";

export default function Project(){


  const projects = [
    {
      image: xLayout ,
      name: "Project Name 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: youtubeLayout ,
      name: "Project Name 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: ToDoList ,
      name: "Project Name 3",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ]

  return (
    <div> 
      

            <main className="px-10 container pt-16 mx-auto font-mono dark:bg-gray-900">
              <section className="min-h-screen">
                <div className="mb-3 text-center">
                	<h1 className="text-center text-violet-800 text-5xl font-bold mb-5">My Projects</h1>
                  <p className="text-md mb-5 leading-8 text-gray-800 dark:text-gray-400">Here is all my projects that i did for myself or other clint, with information <br/>about each project</p>
                </div>
                
                <ProjectGrid projects={projects} />

              </section>  
            </main>
          
        </div>
  )
}