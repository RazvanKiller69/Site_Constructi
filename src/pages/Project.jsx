import { useParams} from "react-router-dom";
import { useContext } from "react";
import { ProdList } from "../App";
import Carousel from "../components/Carousel";

const ProjectDetails = () => {
  const { db } = useContext(ProdList);
  const { title } = useParams();


  const project = db.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="container mx-auto ">
            <div className="mb-6">
        <Carousel images={project.images} />
      </div>

      <p className="mt-4 text-lg">{project.description}</p>
      <p className="mt-4 text-lg">{project.detailedDescription}</p>
    </div>
  );
};

export default ProjectDetails;
