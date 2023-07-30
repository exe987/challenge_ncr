import { render, screen } from "@testing-library/react";
import Layout from "../components/layout/Layout";
import "@testing-library/jest-dom/extend-expect";

describe("Layout component", () => {
  it("renders the children elements", () => {
    // Render the Layout component with child elements
    render(
      <Layout>
        <p>Child Element 1</p>
        <p>Child Element 2</p>
      </Layout>
    );

    // Get the child elements by their text content
    const childElement1 = screen.getByText("Child Element 1");
    const childElement2 = screen.getByText("Child Element 2");

    // Assertion: Verify that the child elements are present in the document
    expect(childElement1).toBeInTheDocument();
    expect(childElement2).toBeInTheDocument();
  });
});
