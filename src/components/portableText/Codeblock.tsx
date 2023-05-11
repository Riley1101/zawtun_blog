import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  atomOneDarkReasonable,
  atelierLakesideDark,
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
      style={atomOneDarkReasonable}
      customStyle={{
        padding: "20px",
        marginBlock: "20px",
        fontSize: "14px",
        background: "transparent",
        border: "solid 1px #484d82",
        borderRadius: "10px",
      }}
    >
      {value.code}
    </SyntaxHighlighter>
  );
}
