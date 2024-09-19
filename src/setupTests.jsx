import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { LanguageContextProvider } from "./components/LanguageContext/LanguageContext";

expect.extend(matchers);

export const LanguageProvider = ({ data, children }) => (
	<LanguageContextProvider data={data}>{children}</LanguageContextProvider>
);

afterEach(() => {
	cleanup();
});
