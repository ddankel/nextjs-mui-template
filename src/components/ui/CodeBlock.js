import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);

const CodeBlock = ({ children }) => {
  return (
    <SyntaxHighlighter language="js" style={oneDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
