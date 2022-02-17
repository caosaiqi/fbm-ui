import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import Select from ".";

const options = [
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
];

describe("<Select />", () => {
  it("should render", () => {
    const { container } = render(<Select value="1" options={options} />);
    expect(container.querySelector("input")).toHaveProperty("value", "1");
  });

  it("should get selected element from arguments", () => {
    const handleChange = jest.fn();
    const { getByRole, getAllByRole } = render(
      <Select value="" options={options} onChange={handleChange} />
    );
    fireEvent.mouseDown(getByRole("button"));
    act(() => {
      getAllByRole("option")[1].click();
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    const selected = handleChange.mock.calls[0][1];
    expect(React.isValidElement(selected)).toEqual(true);
  });

  it('should select the option based on the number value', () => {
    render(
      <Select open value={1} options={options} />
    );
    const [first, second] = screen.getAllByRole('option');
    expect(first).toHaveAttribute('aria-selected', 'true');
    expect(second).toHaveAttribute('aria-selected', 'false');
  });

  it('should select the option based on the string value', () => {
    render(
      <Select open value="1" options={options} />
    );
    const [first, second] = screen.getAllByRole('option');
    expect(first).toHaveAttribute('aria-selected', 'true');
    expect(second).toHaveAttribute('aria-selected', 'false');
  });
});
