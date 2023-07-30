import { render, screen, act } from "@testing-library/react";
import { BankDataContextProvider } from "../context/BankDataContext";
import Account from "../pages/pageComponents/Account";
import "@testing-library/jest-dom/extend-expect";

describe("AccountPageComponent", () => {
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
          <Account />
        </BankDataContextProvider>
      );
    });

    const data = localStorage.getItem("account_data");
    const account = JSON.parse(data);

    expect(screen.getByText("Consulta de Saldo")).toBeInTheDocument();
    expect(screen.getByText("Este es tu saldo actual")).toBeInTheDocument();
    expect(
      screen.getByText(`Saldo de la cuenta: ${account.moneda} ${account.saldo}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Tipo de cuenta: Cuenta corriente`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Numero de cuenta: ${account.n}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Salir")).toBeInTheDocument();
  });
});
