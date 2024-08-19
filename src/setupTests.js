/* eslint-disable react/prop-types */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import { LanguageContextProvider } from "./components/LanguageContext/LanguageContext";

// import data from "./components/MultiAccountDashboard/AccountCard/lang.json";

export const LanguageProvider = ({ data, children }) => (
  <LanguageContextProvider data={data}>{children}</LanguageContextProvider>
);
