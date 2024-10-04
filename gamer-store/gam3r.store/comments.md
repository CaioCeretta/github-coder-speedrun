## What is Turbo Repo?

Now we are using turborepo,turbo repo is a high-performance build system designed for managing monorepos. A monorepo is a
single repository that holds the code for multiple applications or packages, rather than having a separate repository for
each project. This setup is often used in large-scale projects or teams that maintain several related apps or libraries, such
as frontend and backend services, or different modules in a larger project.

It's optimized for monorepo workflows by providing faster builds, caching and dependency management, here are some key features

In short, Turborepo optimizes and simplifies working with monorepos, making large codebases easier to build, test, and maintain.
It’s especially useful for projects involving multiple apps, services, or shared libraries.

## Project Explanations

The first thing we did in this project, was to pass our front end to the gam3r.store apps folder, where we will place the
frontend, the backend, and the mobile.
We then created a new script in our package.json, which is simply dev, it will be a copy of the start:dev script and now
if we run dev, directly from the root of our project, he will both start the front end, aswell as the back end at the same
time, if we had it in two separate projects, we would have to run one script of the frontend, and then run the script
of the backend, opening two terminals two run each one of them, but here we will need only one command.

By running yarn run dev, in the root, we will see on the terminal and be able to navigate for each application that ran.

The run dev script will run our core package, but we are also going to create a package we are going to reutilize both
on the frontend and the backend projects, this package that will be common to both projects will be placed inside that
packages folder.

Packages folder outside of the apps, inside of it we'll create a core folder, and inside of it will have a jest.config
a package.json and a tsconfig.
Inside of package.json we'll have a build script, and will run the project based on the compiled project of the dist folder
that is going to be the folder the project will go when compiled.

Now we'll create a src in the core folder, and place everything we have inside the frontend core, because now we will have
a problem as soon as we delete the core folder from the frontend, but the same code is in another place, which is the packages
folder.

Now we are going to make our frontend project, to depend on the this other project folder, and this folder, depend on the
frontend. But one important thing to notice is that we are using the tsup that will help compiling our code from typescript
to javascript, and will also monitorize it, using the watch mode

Because we have several new dependencies, such as tsup, we'll run a yarn install and everything we need, now we can run
the command yarn run build, now we're going to have an error on the frontend build, because it is importing files from
the core folder, which now, we don't have anymore.

So everywhere we have @/core well change to @gstore/core, this is the name we are using on our package.json of the core
located in the packages/core/src/package.json, this is going to be our shared name for everywhere, so for it, we have
to declare as dependency of our front end project, a dependency of "@gstore/core": "*", because now the frontend will
look in this dependency as it is a node package we are used to install in our app, in the backend project, we also need
this dependency.

Now we run the yarn install again, and turbo rebo will look at this dependency not on the remote repository inside node_modules
but inside our project, now we'll have these internal links between the projects.

Now by successfully running the build, the front end build is already accessing the shared data in the package and the
backend also has access to these data/libraries, and now we indeed separated what is the core of our application from that
which is frontend, and the same to the backend.









