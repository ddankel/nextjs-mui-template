import CodeBlock from "@/ui/CodeBlock";
import Link from "@/ui/Link";
import PageTitle from "@/ui/PageTitle";
import Paragraph from "@/ui/Paragraph";
import Section from "@/ui/Section";
import { VisualDemo } from "@/ui/VisualDemo";
import { Box, Button, Typography } from "@mui/material";

export default async function LinksPage() {
  return (
    <>
      <PageTitle>Links</PageTitle>
      <Section>
        <Paragraph>
          The <code>@/ui/Link</code> component included in this project provides a simple interface
          to use <Link href="https://mui.com/material-ui/react-link/">@mui/material/Link</Link>{" "}
          (hereafter referred to as MuiLink) to style NextJS&apos;s{" "}
          <Link href="https://nextjs.org/docs/api-reference/next/link">next/Link</Link> (hereafter
          referred to as NextLink). This allows us to use the former&apos;s styles but keep the
          latter&apos;s functionality for internal links. External links will use MuiLink alone,
          avoiding uneccessary overhead and applying{" "}
          <code>rel=&quot;noopener noreferrer&quot;</code> to external links automatically.
        </Paragraph>
        <Paragraph>
          The following NextLink-related properties will all be forwarded to that component: <br />
          <code>prefetch, replace, scroll, shallow, locale</code>
        </Paragraph>
        <Paragraph>
          The remaining properties will all be forwarded to MuiLink. This component will also
          respect any applied styles and configurations from the theme file, if one is present.
        </Paragraph>
      </Section>

      {/*  */}

      <Section>
        <Typography variant="h2">Internal Link</Typography>
        <Paragraph>
          An internal set without the <code>external</code> property set will behave like a NextJS
          link but with styling from MUI.
        </Paragraph>
        <VisualDemo>
          <Link href="/">Home</Link>
        </VisualDemo>
        <CodeBlock>{`<Link href="/">Home</Link>`}</CodeBlock>
      </Section>
      {/*  */}
      <Section>
        <Typography variant="h2">Composition</Typography>
        <Paragraph>
          This component can used for{" "}
          <Link href="https://mui.com/material-ui/guides/composition/">
            MUI compopnent composition
          </Link>{" "}
          using the <code>component</code> prop as usual.
        </Paragraph>
        <VisualDemo>
          <Button color="primary" variant="contained" component={Link} href="/">
            Home
          </Button>
        </VisualDemo>
        <CodeBlock>{`<Button color="primary" variant="contained" component={Link} href="/">
  Home
</Button>`}</CodeBlock>
      </Section>
      {/*  */}
      <Section>
        <Typography variant="h2">Implicit External Link</Typography>
        <Paragraph>
          If the <code>external</code> property is not supplied, <code>@/ui/Link</code> will infer
          if it is dealing with an internal or external link and apply the appropriate behavior.
          Note how the following link is propertly treated as an external link depsite not having an{" "}
          <code>external</code> prop set.
        </Paragraph>
        <VisualDemo>
          <Link href="https://github.com">Github</Link>
        </VisualDemo>
        <CodeBlock>{`<Link href="https://github.com">Home</Link>`}</CodeBlock>
      </Section>
      {/*  */}
      <Section>
        <Typography variant="h2">Explicit External Link</Typography>
        <Paragraph>
          If the <code>external</code> property is set to true, the link will render as an external
          link (ie not using <code>next/link</code>). This <b>overrides</b> what would otherwise be
          inferred from the target url. See below, where the &quot;home&quot; link will force a page
          refresh and loss of application state.
        </Paragraph>

        <VisualDemo>
          <div>
            <Link href="/" external>
              Home (external link)
            </Link>
          </div>
          <div>
            <Link href="https://github.com" external>
              Github
            </Link>
          </div>
        </VisualDemo>

        <CodeBlock>
          {`<Link href="/" external>Home (external link)</Link>
<Link href="https://github.com" external>Github</Link>`}
        </CodeBlock>
      </Section>
    </>
  );
}
