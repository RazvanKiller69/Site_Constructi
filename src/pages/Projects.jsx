import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdList } from "../App";
import Card from "../components/Card";

const Projects = () => {
  const { db } = useContext(ProdList);


  const sortedProjects = [...db].sort(
    (a, b) => new Date(b.completionDate) - new Date(a.completionDate)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
        
            <Card
              key={index}
              title={project.title}
              content={project.content}
              images={project.images}
              completionDate={project.completionDate}
              description={project.description}
            />
         
        ))}
      </div>
    </div>
  );
};

export default Projects;
