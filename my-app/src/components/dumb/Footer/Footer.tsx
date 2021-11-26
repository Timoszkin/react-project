import "./Footer.css";
import DeveloperList from "../DeveloperList/DeveloperList";
function Footer() {
  const developers = [
    {
      fullname: "Тимофей Фесенко",
      link: "https://t.me/TimaFesenko",
    },
    {
      fullname: "Терехова Ольга",
      link: "https://t.me/JenFlower",
    },
    {
      fullname: "Давыдов Кирилл",
      link: "https://t.me/vtbsky",
    },
    {
      fullname: "Никифорова Татьяна",
      link: "https://t.me/tatiananfrank",
    },
  ];
  return (
    <div className="footer">
      <div className="footer__content">
        <DeveloperList developers={developers} />
        <div>Тут будет лого</div>
      </div>
    </div>
  );
}

export default Footer;
