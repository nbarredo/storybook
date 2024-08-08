// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import { LanguageContextProvider } from "./components/LanguageContext/LanguageContext";
import data from "./components/LanguageContext/lang.json";

export const LanguageProvider = ({ children }) => (
  <LanguageContextProvider data={data}>{children}</LanguageContextProvider>
);
