import { Typography } from "@mui/material";

import Link from "@/ui/Link";
import PageTitle from "@/ui/PageTitle";
import Paragraph from "@/ui/Paragraph";
import Section from "@/ui/Section";

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
          <Link href="https://fonts.google.com/about">Google Fonts</Link>. They are used in the
          following pipeline:
        </Paragraph>
        <ol>
          <li>
            Defined in <code>@/styles/fonts.css</code>, which is...
          </li>
          <li>
            Imported in <code>pages/_app.js</code> and then...
          </li>
          <li>
            Referenced in <code>@/styles/baseTheme</code>
          </li>
        </ol>
        <Paragraph>
          To add (or remove) a font, modify <code>fonts.css</code> and update the theme accordingly.
        </Paragraph>
      </Section>
    </>
  );
};

export default StylesPage;
