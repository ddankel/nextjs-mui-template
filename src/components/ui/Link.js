import { forwardRef } from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";

const isExternalUrl = (url) => url.indexOf("http") === 0 || url.indexOf("mailto:") === 0;

/**
 * Wrapper to combine MUI and NextJS Link components
 *
 * Modified Ben's code to add an 'external' prop which if set will just cause
 * the MUI portion to render.  If external is not explicitly set, the url will
 * be inspected and it's internal/external status inferred from it.
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

  // Respect external prop if present, otherwise use result from isExternalUrl
  const isExternal = external === undefined ? isExternalUrl(href) : external;

  if (isExternal) {
    return <MuiLink ref={ref} href={href} rel="noopener noreferrer" {...muiProps} />;
  }

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
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
