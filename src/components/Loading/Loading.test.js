import { render, screen } from "@testing-library/react";
import React from "react";
import { Loading } from "./index";

test("Renders  component", async () => {
  const loading = <Loading label='loading' />;
  render(loading);
  const loadingElement = await screen.findAllByText("loading");
  expect(loadingElement).toBeDefined();
});
