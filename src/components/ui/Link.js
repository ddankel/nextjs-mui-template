import { forwardRef } from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";

/**
 * Wrapper to combine MUI and NextJS Link components
 *
 * Modified Ben's code to add an 'external' prop which if set will just cause
 * the MUI portion to render.
 *
 * @see https://www.benmvp.com/blog/wrapping-next-link-custom-ui-link-component/
 *
 * >  I use a function declaration (function Link) instead of my typical arrow
 * >  function so that the component definition within forwardRef still has a
 * >  component name (Link). It helps with debugging in the DevTools so that
 * >  it’ll say ForwardRef(Link) instead of just ForwardRef.
 * >  ~~ Ben Ilegbodu
 */
const Link = forwardRef(function Link(props, ref) {
  const { href, prefetch, replace, scroll, shallow, locale, external, ...muiProps } = props;

  if (external) return <MuiLink ref={ref} href={href} {...muiProps} />;

  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      <MuiLink ref={ref} {...muiProps} />
    </NextLink>
  );
});

export default Link;
