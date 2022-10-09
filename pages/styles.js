import { Box, Typography } from "@mui/material";

import ThemeSwitch from "@/components/ThemeSwitch";
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
          A base MUI theme is defined in <code>@/styles</code> with common theme settings. Also
          contained in that directory are a light and dark theme, both of which inherit from the
          base theme and contain mode-specific customizations.
        </Paragraph>
        <Paragraph>
          The application theme mode (light vs dark) is stored in a global state and synced to local
          storage. The switch below can be used to toggle between light and dark mode
          application-wide
        </Paragraph>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ThemeSwitch />
        </Box>
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
