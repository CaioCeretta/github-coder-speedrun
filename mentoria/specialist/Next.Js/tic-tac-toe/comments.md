## Default Color Scheme in tailwind

:root {
--background: #ffffff;
--foreground: #171717;
}

@media (prefers-color-scheme: dark) {
:root {
--background: #0a0a0a;
--foreground: #ededed;
}
}

by having this code in the global.css, what he'll do is check the configuration of the system, and add the variable --background
to the local css vars, then, on the css body rules, he will simply apply the background-color: var(--background) to dynamically
change its value.

## @theme in tailwindcss

@theme is not part of tailwind nor part of the css specification, it may be part of postcss, which is a tailwind dependency

PostCSS is a tool that processes our CSS with plugins, working as a "transformer". It does not make "anything by itself"—everything
depends on the plugins that we use with it.

We can think of PostCSS as a "Webpack for CSS": it reads our CSS and let plugins handle what we wrote—be it adding prefixes,
supporting variables, transforming new syntax, etc.

Tailwind, is in fact, a PostCSS plugin, when we write on top of the file

@tailwind base;
@tailwind components;
@tailwind utilities;

Tailwind reads it via PostCSS and generate all the utility classes.
