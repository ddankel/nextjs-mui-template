import "highlight.js/styles/atom-one-dark.min.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import { Paper } from "@mui/material";

hljs.registerLanguage("javascript", javascript);

const CodeBlock = ({ code }) => {
  const highlightedCode = hljs.highlightAuto(code);

  return (
    <Paper sx={{ px: 3, py: 1 }}>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode.value }} />
      </pre>
    </Paper>
  );
};

export default CodeBlock;
