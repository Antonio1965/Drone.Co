import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="main-footer">
      <span className="footer-title">{props.pieDePagina}</span>
    </div>
  );
};

export default Footer;
