import React from "react";
import { render } from "@testing-library/react";
import Dialog from ".";

const CustomHeader = () => <div data-testid="CustomHeader" />;
const CustomFooter = () => <div data-testid="CustomFooter" />;

describe("<Dialog />", () => {
  it("should render", () => {
    const text = "content";
    const { getByText, queryByText, unmount } = render(
      <Dialog open>{text}</Dialog>
    );
    expect(getByText(text)).toBeInTheDocument();
    unmount();
    expect(queryByText(text)).not.toBeInTheDocument();
  });

  it("should render title", () => {
    const text = "content";
    const { getByText } = render(<Dialog open title={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("should render action buttons", () => {
    const text = "content";
    const { getByText } = render(<Dialog open okText={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("should render CustomHeader", () => {
    const { getByTestId } = render(<Dialog open header={CustomHeader} />);
    expect(getByTestId("CustomHeader")).toBeInTheDocument();
  });

  it("should render CustomFooter", () => {
    const { getByTestId } = render(<Dialog open footer={CustomFooter} />);
    expect(getByTestId("CustomFooter")).toBeInTheDocument();
  });
});
