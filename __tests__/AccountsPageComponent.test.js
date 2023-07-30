import { render, screen, act, waitFor } from "@testing-library/react";
import { BankDataContextProvider } from "../context/BankDataContext";
import Accounts from "../pages/pageComponents/Accounts";
import "@testing-library/jest-dom/extend-expect";

describe("Accounts Component", () => {
  it("renders the Account component with provided pageProps", async () => {
    const Data = {
      cuentas: [
        {
          e: "1",
          n: "872378326799",
          t: 2,
          saldo: "rai",
          moneda: "u$s",
          tipo_letras: "CC",
        },
        {
          e: "2",
          n: "912345678901",
          t: 1,
          saldo: "50000",
          moneda: "ARS",
          tipo_letras: "CCP",
        },
      ],
    };

    // Simulate the API response
    fetchMock.mockResponseOnce(JSON.stringify(Data));

    // Render the Home component with the BankDataContextProvider
    await act(async () => {
      render(
        <BankDataContextProvider>
          <Accounts />
        </BankDataContextProvider>
      );
    });

    // Check if the Accounts component is rendered
    expect(screen.getByText("Consulta de Saldo")).toBeInTheDocument();
    expect(
      screen.getByText("Selecciona la cuenta a consultar")
    ).toBeInTheDocument();

    // Check if the account buttons are displayed
    await waitFor(() => {
      const accountButtons = document.getElementsByClassName("btn_ba");
      expect(accountButtons.length).toBe(2);
    });
  });
});
