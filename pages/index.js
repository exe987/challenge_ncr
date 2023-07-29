import { BankDataContextProvider } from "@/context/BankDataContext";
import Accounts from "./pageComponents/Accounts";

function Home({ pageProps }) {
  return (
    <BankDataContextProvider>
      <Accounts {...pageProps} />
    </BankDataContextProvider>
  );
}

export default Home;