import { useContext } from "react";
import { ProdList } from "../App";
import Card from "../components/Card";

const Home = () => {
  const { db } = useContext(ProdList);

  const recentProjects = [...db]
    .sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate))
    .slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Bine ați venit la Firma Xulescu!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProjects.map((project, index) => (
          <Card
          key={index}
          title={project.title}
          content={project.content}
          images={project.images} // Ensure this matches the updated format
          completionDate={project.completionDate}
          detailedDescription={project.detailedDescription} // Optional, if relevant
        />
        
        ))}
      </div>
    </div>
  );
};

export default Home;
