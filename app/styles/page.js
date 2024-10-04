import Link from "@/ui/Link";
import PageTitle from "@/ui/PageTitle";
import Paragraph from "@/ui/Paragraph";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

const StylesPage = () => {
  return (
    <>
      <PageTitle>Styles</PageTitle>

      {/*  */}

      <Section>
        <Typography variant="h2">Themes</Typography>
        <Paragraph>
          The MUI theme is defined in <code>@/styles/muiTheme</code> with common theme settings. See{" "}
          <Link href="https://mui.com/material-ui/customization/theming/">
            the MUI documentation
          </Link>{" "}
          for options and usage.
        </Paragraph>
      </Section>

      {/*  */}

      <Section>
        <Typography variant="h2">Fonts</Typography>
        <Paragraph>
          The application fonts are sourced from{" "}
          <Link href="https://fonts.google.com/about">Google Fonts</Link> and loaded using the{" "}
          <Link href="https://nextjs.org/docs/api-reference/next/font">@next/font</Link> introduced
          in nextjs v13.
        </Paragraph>
      </Section>
    </>
  );
};

export default StylesPage;
