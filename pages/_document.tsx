import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from "next/document";

import { muiTheme } from "@/styles/muiTheme";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";

interface MyDocumentProps extends DocumentProps, DocumentHeadTagsProps {}

export default function MyDocument(props: MyDocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <meta name="theme-color" content={muiTheme.palette.primary.main} />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
