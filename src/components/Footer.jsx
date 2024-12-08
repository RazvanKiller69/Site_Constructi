import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-4">
      <div>
        <nav>
          <li>Telefon:<a href="tel:0724471662">0724471662</a></li>
          <li>Email:<a href="mailto:example@email.com">example@email.com</a> </li>
          <li>Locație: [Adresă completă] </li>
        </nav>
      </div>
      <div>
        <nav>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/dadada"}>Error</Link>
          </li>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
