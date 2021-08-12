import { render, screen, fireEvent } from "@testing-library/react";
import NavMenu from "./NavMenu";
import React from "react";
test("loads and displays greeting", async () => {
  render(<NavMenu />);

  // let container = screen.getByTestId("navmenu");
  // console.log(container);
  // fireEvent.click(c);
  // expect(screen.getByTestId("NotificationsDropdown")).toBeInTheDocument();
  // expect(1 + 2).toBe(3);
  //   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  //   expect(screen.getByRole("button")).toBeDisabled();
});
