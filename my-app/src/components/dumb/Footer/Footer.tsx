import "./Footer.css";
import DeveloperList from "../DeveloperList/DeveloperList";

function Footer(props: any) {
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

  const style = {
    backgroundColor: props.backgroundColor,
    color: props.color
  }

  return (
    <div className="footer" style={style}>
      <div className="footer__content">
        <DeveloperList developers={developers} />
        <div>There will be Logo</div>
      </div>
    </div>
  );
}

export default Footer;
