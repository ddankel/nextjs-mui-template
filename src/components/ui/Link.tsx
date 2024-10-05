"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

const isExternalUrl = (url: string): boolean => {
  return url.indexOf("http") === 0 || url.indexOf("mailto:") === 0;
};

// `LinkProps` is the combination of the MUI `LinkProps` and the Next `LinkProps`
// We wanna use the `href` prop from `next/link` so we omit it from MUI's.
export interface LinkProps
  extends Omit<MuiLinkProps, "href">,
    Omit<NextLinkProps, "as" | "passHref" | "children"> {
  external?: boolean;
  href: string;
}

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
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
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
      legacyBehavior={true}
    >
      <MuiLink ref={ref} {...muiProps} />
    </NextLink>
  );
});
