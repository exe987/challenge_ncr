import "./layout.css";
import Head from "next/head";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Consulta el saldo de tu cuenta bancaria"
        />
        <title>NCR_SSFW</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="layout">
        <Header />
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
