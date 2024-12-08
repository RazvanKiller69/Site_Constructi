import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext,useState } from "react";

export const ProdList = createContext();

function App() {
  const [db, setdb] = useState([
    {
      title: "Constructie",
      content: "Bloc 4 etaje construit acum 6 ore",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Constructie+1", important: true },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Constructie+2", important: false },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Constructie+3", important: true },
      ],
      completionDate: "2024-11-17",
      description: "Procesul de construcție a durat șase luni, cu un design modern.",
      detailedDescription:"Construcția blocului cu 4 etaje a început cu o fază intensă de planificare și proiectare care a durat două luni. Echipa de arhitecți a colaborat cu experți în inginerie pentru a crea un design modern, eficient din punct de vedere energetic. Lucrările au continuat cu săparea fundației, urmată de turnarea betonului. Pe parcursul a patru luni, structura de rezistență a fost ridicată, iar fațada a fost acoperită cu materiale de ultimă generație. Interiorul a fost dotat cu finisaje de calitate, iar lucrările au fost finalizate cu o verificare amănunțită a siguranței clădirii.",
    },
    {
      title: "Fabrica Viermi Gumati",
      content: "Sunt ca viermii, dar jeleuri",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Guma+1", important: true },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Guma+2", important: true },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Guma+3", important: false },
      ],
      completionDate: "2024-12-15",
      description: "Un proiect delicios și inovator!",
      detailedDescription:"Planificarea pentru fabrica de viermi gumati a început cu cercetări de piață pentru a înțelege preferințele consumatorilor. Construcția efectivă a început cu pregătirea terenului și ridicarea unei structuri adaptate pentru echipamentele industriale. Echipamentele moderne pentru producția de jeleuri au fost instalate cu grijă, urmate de teste riguroase pentru a asigura standarde de calitate. După finalizarea construcției, fabrica a fost certificată pentru a produce dulciuri sigure și delicioase.",
    },
    {
      title: "Gard",
      content: "Gard armat construit din epoca mezozoica",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Gard+1", important: false },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Gard+2", important: true },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Gard+3", important: true },
      ],
      completionDate: "2024-10-20",
      description: "Rezistent și testat împotriva oricărui impact!",
      detailedDescription:"Gardul armat a fost proiectat să reziste la condiții extreme și să dureze peste generații. Procesul de construcție a inclus selecția materialelor durabile, săparea fundațiilor adânci și montarea unei structuri metalice complexe. Învelișul final a fost aplicat pentru a proteja gardul de coroziune și pentru a-i oferi un aspect estetic. Testele finale au confirmat rezistența gardului la șocuri și condiții meteo severe.",
    },
    {
      title: "Autostrada Soarelui",
      content: "Autostrada Soarelui construita si reconstruita de la inceputul vremurilor pana azi.",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Autostrada+1", important: true },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Autostrada+2", important: false },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Autostrada+3", important: true },
      ],
      completionDate: "2024-11-10",
      description: "Un drum esențial pentru legătura între regiuni.",
      detailedDescription: "Construcția Autostrăzii Soarelui a reprezentat un efort monumental. Proiectarea traseului a implicat cartografiere detaliată și consultări cu comunitățile locale. Etapele construcției au inclus excavarea, montarea straturilor de bază și turnarea asfaltului de înaltă calitate. Stațiile de odihnă și punctele de control au fost integrate în design pentru confortul utilizatorilor. După mai multe inspecții și reparații minore, autostrada a fost deschisă traficului, simbolizând un progres semnificativ în infrastructura națională.",
    },
    {
      title: "Cabana de la Lacul Bezna",
      content: "O cabana care 100% nu este bantuita",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Cabana+1", important: true },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Cabana+2", important: false },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Cabana+3", important: true },
      ],
      completionDate: "2024-11-05",
      description: "Perfectă pentru o vacanță liniștită.",
      detailedDescription: "Cabana de la Lacul Bezna a fost proiectată pentru a se încadra armonios în peisajul natural. Construcția a început cu o analiză detaliată a terenului, urmată de ridicarea fundației pe o bază solidă de piatră. Materialele utilizate, precum lemnul tratat și piatra naturală, au fost selectate pentru a asigura durabilitatea. Interiorul a fost decorat cu un stil rustic, iar toate lucrările au fost realizate pentru a respecta mediul înconjurător.",
    },
    {
      title: "Fabrica de ulei P.Diddy",
      content: "Aici nu s-a intamplat absolut nimic",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Fabrica+1", important: false },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Fabrica+2", important: true },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Fabrica+3", important: true },
      ],
      completionDate: "2024-10-25",
      description: "O fabrică ce susține economia locală.",
      detailedDescription:"Fabrica de ulei a fost construită cu un accent pe sustenabilitate și eficiență. Proiectul a început cu planificarea fluxului de producție pentru a minimiza risipa. Construcția a inclus montarea echipamentelor specializate, instalarea panourilor solare și a sistemelor de reciclare a apei. Finalizarea proiectului a inclus testarea liniilor de producție și obținerea certificărilor necesare pentru a garanta calitatea produsului.",
    },
    {
      title: "Bacania la 3 porci",
      content: "Abator Acreditat",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Bacanie+1", important: true },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Bacanie+2", important: false },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Bacanie+3", important: true },
      ],
      completionDate: "2024-11-01",
      description: "Servim carne proaspătă și produse tradiționale.",
      detailedDescription:"Construcția băcăniei a fost realizată cu scopul de a oferi un spațiu funcțional și atractiv pentru clienți. Lucrările au început cu ridicarea unei structuri solide din materiale moderne, urmate de instalarea vitrinelor frigorifice și a spațiilor de depozitare. Atenția la detalii s-a reflectat în amenajarea interiorului, utilizarea materialelor tradiționale și crearea unui mediu primitor pentru clienți.",
    },
    {
      title: "Sanctuarul Maimutelor",
      content: "Sat african numai bun de vizitat",
      images: [
        { url: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Maimute+1", important: false },
        { url: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Maimute+2", important: true },
        { url: "https://via.placeholder.com/300/DAF7A6/FFFFFF?text=Maimute+3", important: true },
      ],
      completionDate: "2024-10-30",
      description: "Un loc unic pentru relaxare și explorare.",
      detailedDescription:"Sanctuarul Maimuțelor a fost construit cu grijă pentru a recrea un habitat natural pentru primate. Proiectul a început cu studiul ecosistemului local, urmat de amenajarea unei zone extinse cu vegetație și spații de joacă. Clădirile administrative și facilitățile pentru vizitatori au fost construite din materiale eco-friendly. Sanctuarul a fost finalizat cu instalarea unor sisteme de monitorizare și securitate pentru a proteja animalele și vizitatorii.",
    },
  ]);
  

  return (
    <>
      <ProdList.Provider value={{ db, setdb }}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
            <NavBar />
          </header>
          <main className="flex-grow">
            <div className="min-h-[80vh] p-4">
              <Outlet />
            </div>
          </main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
      </ProdList.Provider>
    </>
  );
}

export default App;
