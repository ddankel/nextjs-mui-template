# nextjs-mui-template

This sample application is an opinionated scaffold of
a [Next.js](https://nextjs.org) application using [MUI](https://mui.com/) as the UI framework.

## Usage

See [Github's documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) on creating a repository from a template.

## Features

- A **bare-bones responsive layout**. The navigation options displayed in the AppBar at desktop resolutions are moved to a drawer at mobile resolutions.
- **Module path aliases** configured such that `@/*` maps to `src/*`. For example:

  ```js
  // Instead of this...
  import useTheme from "../../../src/hooks/useExampleHook";

  // just use this!
  import useTheme from "@/hooks/useExampleHook";
  ```

## Limitations

:warning: MUI cannot be used with the new `app` directory until an [underlying Emotion issue](https://github.com/vercel/next.js/issues/41994) is first resolved.

## Optional Dependencies

The following optional dependencies are not part of the core Next.js/MUI implementation and can be removed if no longer needed.

### @mui/icons-material

MUI's companion icon library. These icons are currently used for the mobile burger menu button as well as the light/dark theme mode switch on the styles page.

### react-syntax-highlighter

A simple javascript syntax highlight component was built at `@/ui/CodeBlock` to help format examples throughout the sample app. If this component isn't needed then this dependency can be deleted.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
