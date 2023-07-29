"use client";
import { createContext } from "react";

const BankDataContext = createContext();

export const BankDataContextProvider = ({ children }) => {
  const getAccountsData = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/97d89162575a9d816661"
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos de la API");
      }
      const data = await response.json();
      return data.cuentas;
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };

  const getAccountType = (type) => {
    if (type === "CC" || type === "Cc" || type === "CCP") {
      return "Cuenta corriente";
    } else {
      return "Caja de ahorro";
    }
  };

  const getAccountData = () => {
    const get_data_account = localStorage.getItem("account_data");
    const account = JSON.parse(get_data_account);
    return account;
  };

  const setAccountData = (data) => {
    localStorage.setItem("account_data", JSON.stringify(data));
  };

  return (
    <BankDataContext.Provider
      value={{
        getAccountsData,
        getAccountData,
        getAccountType,
        setAccountData,
      }}
    >
      {children}
    </BankDataContext.Provider>
  );
};

export default BankDataContext;
