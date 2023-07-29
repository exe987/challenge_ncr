import { useContext } from "react";
import Link from "next/link";
import BankDataContext from "@/context/BankDataContext";

const BtnAccounts = ({ account_type, account_number, account_data }) => {
  const { getAccountType, setAccountData } = useContext(BankDataContext);
  return (
    <Link
      onClick={() => setAccountData(account_data)}
      className="btn_ba"
      href={`/account`}
    >
      <p>{getAccountType(account_type)}</p>
      <p>N°: {account_number}</p>
    </Link>
  );
};

export default BtnAccounts;
