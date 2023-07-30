import { render, act } from "@testing-library/react";
import { BankDataContextProvider } from "@/context/BankDataContext";
import AccountPage from "../pages/account";
import "@testing-library/jest-dom/extend-expect";

describe("AccountPage", () => {
  beforeEach(() => {
    // Set up localStorage data before test
    const pageProps = {
      e: "1",
      n: "872378326799",
      t: 2,
      saldo: "rai",
      moneda: "u$s",
      tipo_letras: "CC",
    };
    localStorage.setItem("account_data", JSON.stringify(pageProps));
  });

  it("renders the Account component with provided pageProps", async () => {
    // Render the AccountPage component with the BankDataContextProvider
    await act(async () => {
      render(
        <BankDataContextProvider>
          <AccountPage />
        </BankDataContextProvider>
      );
    });
  });
});
