import CodeBlock from "@/ui/CodeBlock";
import Link from "@/ui/Link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const VisualDemo = styled(Box)``;
VisualDemo.defaultProps = {
  border: 1,
  borderRadius: 1,
  borderColor: "grey.700",
  padding: 2,
  my: 2,
};

const LinksPage = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h1">Links</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <code>@/ui/Link</code> included in this project provides a simple interface to use{" "}
          <Link href="https://mui.com/material-ui/react-link/">@mui/material/Link</Link> (hereafter
          referred to as MuiLink) to style NextJS's{" "}
          <Link href="https://nextjs.org/docs/api-reference/next/link">next/link</Link> (hereafter
          referred to as NextLink). This allows us to use the former's styles but keep the latter's
          functionality for internal links. External links will use MuiLink alone, avoiding
          uneccessary overhead and applying <code>rel="noopener noreferrer"</code> to external links
          automatically.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The following NextLink-related properties will all be forwarded to that component: <br />
          <code>prefetch, replace, scroll, shallow, locale</code>
        </Typography>
        <Typography variant="body1">
          The remaining properties will all be forwarded to MuiLink. This component will also
          respect any applied styles and configurations from the theme file, if one is present.
        </Typography>
      </Box>

      {/*  */}

      <Box>
        <Typography variant="h2">Internal Link</Typography>
        <Typography variant="body1">
          An internal set without the <code>external</code> property set will behave like a NextJS
          link but with styling from MUI.
        </Typography>
        <VisualDemo>
          <Link href="/">Home</Link>
        </VisualDemo>
        <CodeBlock>{`<Link href="/">Home</Link>`}</CodeBlock>
      </Box>

      {/*  */}

      <Box>
        <Typography variant="h2">Composition</Typography>
        <Typography variant="body1">
          This component can used for{" "}
          <Link href="https://mui.com/material-ui/guides/composition/">
            MUI compopnent composition
          </Link>{" "}
          using the <code>component</code> prop as usual.
        </Typography>
        <VisualDemo>
          <Button color="primary" variant="contained" component={Link} href="/">
            Home
          </Button>
        </VisualDemo>
        <CodeBlock>{`<Button color="primary" variant="contained" component={Link} href="/">
  Home
</Button>`}</CodeBlock>
      </Box>

      {/*  */}

      <Box>
        <Typography variant="h2">Implicit External Link</Typography>
        <Typography variant="body1">
          If the <code>external</code> property is not supplied, <code>@/ui/Link</code> will infer
          if it is dealing with an internal or external link and apply the appropriate behavior.
          Note how the following link is propertly treated as an external link depsite not having an{" "}
          <code>external</code> prop set.
        </Typography>
        <VisualDemo>
          <Link href="https://github.com">Home</Link>
        </VisualDemo>
        <CodeBlock>{`<Link href="https://github.com">Home</Link>`}</CodeBlock>
      </Box>

      {/*  */}

      <Box>
        <Typography variant="h2">Explicit External Link</Typography>
        <Typography variant="body1">
          If the <code>external</code> property is set to true, the link will render as an external
          link (ie not using <code>next/link</code>). See below, where the 'home' link will force a
          page refresh and loss of application state.
        </Typography>

        <VisualDemo>
          {/* <Stack direction="row" spacing={2}> */}
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
          {/* </Stack> */}
        </VisualDemo>

        <CodeBlock>
          {`<Link href="/" external>Home (external link)</Link>
<Link href="https://github.com" external>Github</Link>`}
        </CodeBlock>
      </Box>
    </Stack>
  );
};

export default LinksPage;
