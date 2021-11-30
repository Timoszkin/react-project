import "./Footer.css";
import DeveloperList from "../DeveloperList/DeveloperList";

function Footer() {
  const developers = [
    {
      fullname: "Fesenko Tymofii",
      link: "https://t.me/TimaFesenko",
    },
    {
      fullname: "Terekhova Olga",
      link: "https://t.me/JenFlower",
    },
    {
      fullname: "Davydov Kirill",
      link: "https://t.me/vtbsky",
    },
    {
      fullname: "Nikiforova Tatiana",
      link: "https://t.me/tatiananfrank",
    },
  ];
  return (
    <div className="footer">
      <div className="footer__content">
        <DeveloperList developers={developers} />
        <div>There will be Logo</div>
      </div>
    </div>
  );
}

export default Footer;
