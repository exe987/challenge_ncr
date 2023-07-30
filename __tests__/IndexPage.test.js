import { render, act } from "@testing-library/react";
import { BankDataContextProvider } from "@/context/BankDataContext";
import Home from "../pages/index";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
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
      ],
    };

    // Simulate the API response
    fetchMock.mockResponseOnce(JSON.stringify(Data));

    // Render the Home component with the BankDataContextProvider
    await act(async () => {
      render(
        <BankDataContextProvider>
          <Home />
        </BankDataContextProvider>
      );
    });
  });
});
