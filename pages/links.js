import CodeBlock from "@/ui/CodeBlock";
import Link from "@/ui/Link";
import { Box, Container, Stack, Typography } from "@mui/material";
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
    <Container>
      <Stack spacing={5}>
        <Box>
          <Typography variant="h1">Links</Typography>
          <Typography variant="body1">asdf</Typography>
        </Box>

        <Box>
          <Typography variant="h2">Internal Link</Typography>
          <Typography variant="body1">asdf</Typography>
          <VisualDemo>
            <Link href="/">Home</Link>
          </VisualDemo>
          <CodeBlock>{`<Link href="/">Home</Link>`}</CodeBlock>
        </Box>

        <Box>
          <Typography variant="h2">Explicit External Link</Typography>
          <Typography variant="body1">asdf</Typography>
          <VisualDemo>
            <Link href="/" external>
              Home
            </Link>
            <Link href="https://github.com" external>
              Home
            </Link>
          </VisualDemo>
          <CodeBlock>{`<Link href="/">Home</Link><Link href="/">Home</Link>`}</CodeBlock>
        </Box>

        <Box>
          <Typography variant="h2">Implicit External Link</Typography>
          <Typography variant="body1">asdf</Typography>
          <VisualDemo>
            <Link href="https://github.com">Home</Link>
          </VisualDemo>
          <CodeBlock>{`<Link href="/">Home</Link>`}</CodeBlock>
        </Box>
      </Stack>
    </Container>
  );
};

export default LinksPage;
