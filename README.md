# nextjs-mui-template

This sample application is an opinionated scaffold of
a [Next.js](https://nextjs.org) application using [MUI](https://mui.com/) as the UI framework.

## Usage

See [Github's documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) on creating a repository from a template.

## Features

- A **bare-bones responsive layout**. The navigation options displayed in the AppBar at desktop resolutions are moved to a drawer at mobile resolutions.
- **Multiple themes**. The styles directory contains a base theme file as well as a light and a dark theme, both of which inherit from the base. Themes can be switched on the fly (see the style page).
- **Module path aliases** configured such that `@/*` maps to `src/*.` For example:

  ```js
  // Instead of this...
  import useTheme from "../../../hooks/useTheme";

  // just use this!
  import useTheme from "@/hooks/useTheme";
  ```

## Optional Dependencies

The following optional dependencies are not part of the core Next.js/MUI implementation and can be removed if no longer needed.

### @mui/icons-material

MUI's companion icon library. These icons are currently used for the mobile burger menu button as well as the light/dark theme mode switch on the styles page.

### react-syntax-highlighter

A simple js syntax highlight component was built at `@/ui/CodeBlock` to help format examples throughout the sample app. If this component isn't needed then this dependency can be deleted.

### zustand

A super simple global state management library. The sample app's theme switching functionality is the only place where zustand is used, and it can be removed of theme switching is deleted or refactored to use a different state storage method.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
