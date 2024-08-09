// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";

export const LanguageContext = React.createContext();
LanguageContext.displayName = "LanguageContext";
export function LanguageContextProvider({ children, data }) {
  const lang = (key, fallback) => {
    if (data[key]) {
      return data[key];
    } else if (fallback) {
      return fallback;
    } else {
      return "Key not found.";
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        lang
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
LanguageContextProvider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.objectOf(PropTypes.string)
};
