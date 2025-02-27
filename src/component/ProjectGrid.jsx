import React from 'react';

const ProjectGrid = ({projects}) => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 pb-32 gap-16">
            {projects.map((project, index) => (
        <div
          key={index}
          className="group hover:scale-110 transform-gpu duration-500 shadow-lg border-2 rounded-xl border-violet-800"
        >
          <img className="rounded-lg h-full w-full" src={project.image} alt={project.name} />
          <div className="opacity-0 rounded-lg p-3 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white font-semibold text-center">
            <h3 className="pb-4 text-2xl text-violet-600">{project.name}</h3>
            <p className="text-md mt-2">{project.description}</p>
            <button className='p-3 text-white duration-500 bg-violet-800 rounded-full hover:bg-violet-500  mt-4 '>More info</button>
          </div>
        </div>
      ))}
    </div>
    );
};

export default ProjectGrid;