import React from "react";
import { Text } from "../components/Text/Text";

const LanguageTable = (data) => {
  return (
    <aside
      style={{
        border: "1px solid var(--gray-30)",
        borderRadius: "var(--global-radius)",
        padding: "10px",
        width: "fit-content",
        marginBottom: "40px"
      }}
    >
      <h5 style={{ marginBottom: "10px" }}>
        Language Keys and Sample Values Used in This Component
      </h5>
      <table>
        <tbody>
          {Object.entries(data).map(([key, value], i) => {
            return (
              <tr key={i}>
                <td style={{ paddingRight: "30px" }}>
                  <Text size="1" weight="semi">
                    {key}
                  </Text>
                </td>
                <td>
                  <Text size="1">{value}</Text>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </aside>
  );
};
export { LanguageTable };
