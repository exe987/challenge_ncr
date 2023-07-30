import { render } from "@testing-library/react";
import Header from "../components/header/Header";
import "@testing-library/jest-dom/extend-expect";

describe("Header component", () => {
  // Test to check if the logo image is rendered with correct attributes
  test("renders logo image with correct attributes", () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText("logo");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/logo.png");
    expect(logoImage).toHaveAttribute("width", "140");
    expect(logoImage).toHaveAttribute("height", "100");
  });

  // Test to check if the component contains a link to the home page with the correct href
  test("renders a link to home", () => {
    const { getByRole } = render(<Header />);
    const homeLink = getByRole("link", { href: "/" });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
