import CodeBlock from "@/ui/CodeBlock";
import Link from "@/ui/Link";
import PageTitle from "@/ui/PageTitle";
import Paragraph from "@/ui/Paragraph";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

const IndexPage = () => {
  return (
    <>
      <PageTitle>nextjs-mui-template</PageTitle>

      <Section sx={{ mt: -2 }}>
        <Paragraph>
          An opinionated scaffold of a <Link href="https://nextjs.org">Next.js</Link> application
          using <Link href="https://mui.com/">MUI</Link> as the UI framework.
        </Paragraph>
      </Section>

      <Section>
        <Typography variant="h2">Usage</Typography>
        <Paragraph>
          See{" "}
          <Link href="https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template">
            Github&apos;s documentation
          </Link>
          on creating a repository from a template.
        </Paragraph>
      </Section>

      <CodeBlock>test</CodeBlock>
      <CodeBlock>
        {`// Instead of this...
import useTheme from "../../../src/hooks/useExampleHook";

// just use this!
import useTheme from "@/hooks/useExampleHook"; `}
      </CodeBlock>

      <Section>
        <Typography variant="h2">Features</Typography>
        <ul>
          <Paragraph component="li">
            A <b>bare-bones responsive layout</b>. The navigation options displayed in the AppBar at
            desktop resolutions are moved to a drawer at mobile resolutions.
          </Paragraph>
          <Paragraph component="li">
            <b>Module path aliases</b> configured such that <code>@/*</code> maps to{" "}
            <code>src/*</code>. For example:
            {/* <CodeBlock>
              {`// Instead of this...
import useTheme from "../../../src/hooks/useExampleHook";

// just use this!
import useTheme from "@/hooks/useExampleHook"; `}
            </CodeBlock> */}
          </Paragraph>
        </ul>
      </Section>

      {/* <Section>
        <Typography variant="h2">Limitations</Typography>
        <Paragraph>
          ⚠️ MUI cannot be used with the new `app` directory until an{" "}
          <Link href="https://github.com/vercel/next.js/issues/41994">
            underlying Emotion issue
          </Link>{" "}
          is first resolved.
        </Paragraph>
      </Section> */}

      {/* <Section>
        <Typography variant="h2">Optional Dependencies</Typography>
        <Paragraph>
          The following optional dependencies are not part of the core Next.js/MUI implementation
          and can be removed if no longer needed.
        </Paragraph>

        <ul>
          <li>
            <Typography variant="h4">@mui/icons-material</Typography>
            <Paragraph>
              MUI&apos;s companion icon library. These icons are currently used for the mobile
              burger menu button as well as the light/dark theme mode switch on the styles page.
            </Paragraph>
          </li>
          <li>
            <Typography variant="h3">react-syntax-highlighter</Typography>
            <Paragraph>
              A simple javascript syntax highlight component was built at
              <code>@/ui/CodeBlock</code> to help format examples throughout the sample app. If this
              component isn&apos;t needed then this dependency can be deleted.
            </Paragraph>
          </li>
        </ul>
      </Section> */}
    </>
  );
};

export default IndexPage;
