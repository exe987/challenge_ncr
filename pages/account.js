import { BankDataContextProvider } from "@/context/BankDataContext";
import Account from "./pageComponents/Account";

function AccountPage({ pageProps }) {
  return (
    <BankDataContextProvider>
      <Account {...pageProps} />
    </BankDataContextProvider>
  );
}

export default AccountPage;
