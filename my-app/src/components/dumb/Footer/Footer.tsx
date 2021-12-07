import "./Footer.css";
import { useContext } from "react";
import logo from '../../../images/logoFooter.png'
import logo_dark from '../../../images/logoFooter_dark.png'
import DeveloperList from "../DeveloperList/DeveloperList";
import { ThemeContext } from "../../../context/ThemeProvider";

function Footer(props: any) {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    <div className={theme === "light" ? "footer" : "footer_dark"} style={style}>
      <div className="footer__content">
        <DeveloperList developers={developers} />
        <img className="footer_logo" src={theme === 'light' ? logo : logo_dark} alt="LOGO" />
      </div>
    </div>
  );
}

export default Footer;
