// Sidebar.test.jsx
import { assert, test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/SideNav";

test("renders Sidebar component", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const searchIcon = screen.getByTestId("search-icon");
  const homeIcon = screen.getByTestId("home-icon");

  assert.ok(searchIcon);
  assert.ok(homeIcon);
});

test("clicking on home icon navigates to home", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const homeIcon = screen.getByTestId("home-icon");
  fireEvent.click(homeIcon);

  assert.equal(window.location.pathname, "/");
});
