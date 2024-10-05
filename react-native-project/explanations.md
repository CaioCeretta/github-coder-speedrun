# React Native Essentials Lesson

The first thing is to delete the folders [app, components, hooks, scripts] and leave only the node_modules and the assets
folder.

Create a src folder and inside the src, create a index.js and change the package.json by adding the attribute "main"
with the value of "src/index.js" which is going to be our "entry port".

Now, inside the src, we are going to divide it into the folders "screens" and a "components". But if we were going to add
the state management, hooks, contexts and so on, we would create another folder named "data", and inside of it we would place
the hooks, contexts, constants, models, etc.

In the screens folder, we are going to separate each screen into a different folder, to make it very clear to us, which
are the screens being accessed through the `drawer, which screens from the `stack` and the screens accessed via the tab
navigation.

We'll start by creating an index.tsx inside the drawer folder, this index.tsx is what's going to control the navigation
through the drawer, so inside of it, we'll create an app component, inside that app component we are going to wrap every
thing inside a `View`, a `View` is pretty much like a div in a web app, where we will group several elements.

Inside that view we'll start by creating a Text tag, is like the p, span, or things like it

