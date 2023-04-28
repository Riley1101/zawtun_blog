import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  rainbow,
  atelierSulphurpoolDark,
  monokaiSublime,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  value: {
    language: string;
    code: string;
  };
};

export default function Codeblock({ value }: Props) {
  return (
    <SyntaxHighlighter
      language={value.language}
      style={atelierSulphurpoolDark}
      customStyle={{ padding: "20px", marginBlock: "20px", fontSize: "22px" }}
    >
      {value.code}
    </SyntaxHighlighter>
  );
}
