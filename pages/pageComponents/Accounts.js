"use client";
import { useContext, useState, useEffect } from "react";
import BankDataContext from "@/context/BankDataContext";

import Layout from "@/components/layout/Layout";
import BtnAccounts from "@/components/btn_accounts/BtnAccounts";
import "@/styles/styles.css";

export default function Accounts() {
  const [accountsData, setAccountsData] = useState([]);
  const { getAccountsData } = useContext(BankDataContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getAccountsData();
      setAccountsData(data);
    };
    getData();
  }, []);

  const MAX_ACCOUNTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage * MAX_ACCOUNTS_PER_PAGE >= accountsData.length;
  const maxAccountsToShow = isFirstPage || isLastPage ? 5 : 4;

  const startIndex = (currentPage - 1) * MAX_ACCOUNTS_PER_PAGE;
  const endIndex = startIndex + maxAccountsToShow;
  const currentAccounts = accountsData?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Layout>
      <div className="lba">
        <h3>Consulta de Saldo</h3>
        <h2>Selecciona la cuenta a consultar</h2>
        <div className="list_bank_accounts">
          {currentPage > 1 && (
            <button className="btn_ba" onClick={handlePrevPage}>
              {"<<"}
            </button>
          )}
          {currentAccounts?.map((account) => (
            <BtnAccounts
              key={account.n}
              account_type={account.moneda}
              account_number={account.saldo}
              account_data={account}
            />
          ))}
          {accountsData?.length > endIndex && (
            <button className="btn_ba" onClick={handleNextPage}>
              {">>"}
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
