import Link from "next/link";
import "./btnHome.css";

const BtnHome = () => {
  return (
    <Link className="btn_to_home" href={"/"}>
      <p>Salir</p>
    </Link>
  );
};

export default BtnHome;
