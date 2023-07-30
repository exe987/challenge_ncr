import { render } from "@testing-library/react";
import BtnAccounts from "../components/btn_accounts/BtnAccounts";
import { BankDataContextProvider } from "@/context/BankDataContext";

describe("BtnAccounts component", () => {
  it("renders without crashing", () => {
    // Simulate the required data
    const accountData = { account_type: "savings" };
    const setAccountData = jest.fn();

    // Render the component
    render(
      <BankDataContextProvider value={{ setAccountData }}>
        <BtnAccounts account_type={accountData.account_type} />
      </BankDataContextProvider>
    );
  });
});
