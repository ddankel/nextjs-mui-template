import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import Link from "@/ui/Link";

const label = { inputProps: { "aria-label": "Switch demo" } };

const IndexPage = () => {
  return (
    <Container>
      <Link href="/projects">Projects</Link>
      aasd alsd fals dfadf a dfa sdfas dfa sdf adf a fa df af df a dfda sdf a dfa sdf a df af as fda
      df asdf as dfa sdf as df asd fa df a afs df a
      <div>
        <span>With default Theme:</span>
      </div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
    </Container>
  );
};

export default IndexPage;
