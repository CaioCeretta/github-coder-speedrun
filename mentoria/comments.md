## Turbo build

The idea behind it is to create a single repository, and inside of it, develop multiple projects: such as front-end,
mobile, pdv, totem, controlling all of them inside one repository —. This monorepo helps us controlling the application
build, the dependencies between the projects, besides we no longer need to control, and publish each one in npm, in order
to use them. Because they are in the same repository, we no longer have the necessity of publishing it before using it
as a dependency.

Its work is basically managing the build process and controlling the dependencies between the project.
