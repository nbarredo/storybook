import React, { useContext } from "react";
import { LanguageContext, LanguageContextProvider } from "./LanguageContext";

const testComponent = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <article
      style={{ border: "2px solid gray", width: "350px", padding: "10px" }}
    >
      <h3>{lang("title")}</h3>
      <h4>{lang("subtitle")}</h4>
      <p>{lang("content")}</p>
    </article>
  );
};

const meta = {
  title: "Design System/Language Context",
  component: testComponent,
  decorators: [
    (Story, config) => (
      <LanguageContextProvider data={config.args.data}>
        <p>
          The Language Provider component is used to feed company-approved
          content into storybook components. To use it, pass an object of
          key:value pairs into the `data` prop. Then, any component which
          consumes the language context will be able to utilize those keys to
          get their corresponding text values.
        </p>
        <h5>Steps to use the Language Provider:</h5>
        <ol style={{ listStyleType: "number", padding: "20px 40px" }}>
          <li style={{ marginBottom: "10px" }}>
            Import the <code>LanguageContextProvider</code> and wrap it around
            your component or application.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Pass a key:value object to the Provider{`'`}s <code>data</code> prop
          </li>
          <li style={{ marginBottom: "10px" }}>
            Import <code>LanguageContext</code> into the component where you
            {`'`}d like to use the text.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Destructure the <code>lang(key, fallback)</code> function from the
            context so that you can use it: <br />
            <code>
              {" "}
              const {"{"}lang
              {"}"} = useContext(LanguageContext);
            </code>
          </li>
          <li style={{ marginBottom: "10px" }}>
            Call the <code>lang</code> function along with a key that{"'"}s
            present in the key:value object you passed above. At runtime, the
            key{"'"}s value will appear.{" "}
            <code>
              {"{"}lang(`&quot;sample.key.here&quot;){"}"}
            </code>
          </li>
        </ol>
        <h5>Example:</h5>
        <Story />
      </LanguageContextProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {
  args: {
    data: {
      title: "This is the title",
      subtitle: "This is the subtitle",
      content:
        "Manipulate the data object in the Storybook Controls tab to see the text values change.",
    },
  },
};
