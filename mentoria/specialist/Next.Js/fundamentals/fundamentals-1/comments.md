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

## Tailwind / PostCSS / Autoprefixer

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

In practice:

1. We write our CSS with @tailwind or even @apply
2. PostCSS executes all the plugins we've configured (Tailwind, Autoprefixer, etc)
3. It transforms our css based in it
4. Final result: A big css and ready for production

a postcss.config.js example would be

```ts
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}
```

In this case, tailwindcss transforms @tailwind, @apply,etc, and the autoprefixer adds prefixes such as -webkit-, -moz-,
etc, if necessary.

What about @theme?

It won't recognized by tailwind nor by pure PostCSS. It would only have effect if we had an extra plugin, such as
. postcss-theme-function or
. some internal/private plugin that processes @theme

if none of these was configured, this rule is 'left over'

## File Names

The default naming convention in Next.Js App Router for identifying a route is simply to create a page.tsx file. Next.js
will understand of which page we're talking about, (e.g. app/start/page.tsx, corresponds to http://domain/start)
will render that page.tsx

However, if we name the file anything other than `page.tsx`, such as `pages.tsx`, it will no longer recognize it as a route.
In the app router, it's not enough to have a file inside the app directory—it must be specifically named page.tsx in order
to be routable and fetched by the browser.

## Layout

Why was it that when we accessed the /start page, the layout content showed but no the one of page.tsx?

For example, layout is going to be applied to all folders and files inside start folder including the page.tsx that's on
the same level.

But why is it replacing the content of page with the content from layout? e.g. Should show the text
start?

This happens, because for page.tsx be included in the layout, we can't simply create the layout component with some text.
We need to, inside layout, receive the current page content as children and display it where we want to in the structure.

Therefore, the layout always have priority and are required because it will help us define the page structure.

One of the biggest concepts of Next.Js is to understand the hierarchy pattern and how components are mounted, since placing
a folder on top of the other, other than affecting the path it's going to be referred to on the URL, it can also affect
the way components are going to be organized in the app.

## Template Comments

1. Usually, using h-screen on a page external div, will make the div occupy the whole height
2. For components that'll deal with structure and template of a layout/page, we can create, inside components folder, another
   folder named template which, for example, will hold the menu

## Icon as Props Comments

We'll need a destructuring with renaming for the icon, because what happen is, by doing const {icon: Icon } = props;;

props.icon is the value coming from the prop, and we are saying "I want to access props.icon with the name Icon inside of
the component", and since now Icon is now a variable that refers to the component, we use it as <Icon />

Basically, if icon was a string, we wouldn't rename it. But since it is a component, renaming it to Icon, with capital
letters, follows react component naming convention.

The other option would be passing the element to this child, such as icon={<HomeIcon />}, however we are going to be passing
an element and not a component, this is the fundamental difference

prop icon={HomeIcon} type: React.ElementType render it by: <Icon />
prop icon={<HomeIcon />} type: ReactNode | JSX.Element render it by: {icon}

Usually, the second ReactElement and <Icon /> approach is used when we want to have more control inside the component.
By doing this, we can apply conditional logic, such as only render if there is an icon, and it is the most common way in
reusable components.

where a prop would be passed, and we assigned const Icon = props.icon
<Icon className="h-4 w-4" />

JSX>Element and {props.icon} approach is when we only wants to inject the prebuilt element, such as

  <MenuItem icon={<MenuItem className="h-4 w-4" />}

<span>{props.icon}</span>

When using icons from a library, such as lucide-react, react-icons, etc, by passing only the name HomeIcon, for example,
that is part of a library, the component won't know from which library to import, and in these cases, the recommended
practice is to not pass the name of the icon as a string, but the component with the icon already imported.

If we still want to follow the approach of only passing the name of the icon, we would have to maintain a dictionary of
icon names inside the code, such as

import { Home, User, Settings } from '@tabler/icons-react

const iconMap = {
home: Home,
user: User,
settings: Settings,

}

and use

type MenuItemProps = {
iconName: keyof typeof IconMap;
}

const MenuItem = ({iconName}: MenuItemProps) => {
const icon = iconMap[iconName];

    return (
    <Icon className="h-4 w-4" />
    )

}
