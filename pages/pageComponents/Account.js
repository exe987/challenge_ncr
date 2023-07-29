"use client";
import { useContext, useEffect, useState } from "react";
import BankDataContext from "@/context/BankDataContext";

import Layout from "@/components/layout/Layout";
import BtnHome from "@/components/btn_home/BtnHome";
import "@/styles/styles.css";

export default function Account() {
  const [accountData, setAccountData] = useState([]);
  const { getAccountType, getAccountData } = useContext(BankDataContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getAccountData();
      setAccountData(data);
    };
    getData();
  }, []);

  return (
    <Layout>
      <h3>Consulta de Saldo</h3>
      <h2>Este es tu saldo actual</h2>
      <p>
        Saldo de la cuenta: {accountData.moneda} {accountData.saldo}
      </p>
      <p>Tipo de cuenta: {getAccountType(accountData.tipo_letras)}</p>
      <p>Numero de cuenta: {accountData.n}</p>
      <BtnHome />
    </Layout>
  );
}
