# Modules Explanation

## 1st Question - What is a module?

A module, depending on the type of library or framework, can have different meanings, for example, in nodejs every file
is a module, and its content can be exported, exposed something of that file to the outside or we can simply only use
inside of it.

In the NestJS, a module is a folder, and that folder has a main file, which will define the module, so everytime we create
a new module, we organize it inside a folder, and from that module onwards, we will make a reference to many files that this
module manages. And for other modules to manage that module, it's needed a explicit declaration of dependency and for us
to utilize resources of that module that we just imported, that module need to explicilty intend to expose those resources/files
outside of the module in a way we have a control of how this dependencies are working inside our backend app.

One crucial point, when we think of architecture, is not only defining the elements of our app, the elements of our software
but also, to define how the relation between them is working, what is the relationship map between the parts of our app.

If we have, for example, an application with cyclical dependencies, that are dependencies that work like, the module A,
depends the B, and the B depends on A, what means that there is a dependency cycle, and that end up being really bad for
the app.

So inside of NestJS, because of this module system, if it's well organized, we are able to have a dependency management
more explicit. We don't simply go importing a class, but we'll use a sequence of steps, a formality, to avoid unnecessary
dependencies in our project.

We are going to create our first module, utilizing the terminakl, the command is
nest g mo product (nest generate module product)

now we will notice that inside the src folder, we will se that a product folder was created, containing the module, and updated
our app.module.ts, where now, we are impoting the recently created module, because that app.module is the first module
being loaded, and starting from that module, he must declare the other modules so we can go declaring the modules after
it. So if the module is not declared on app.module or we can't reach that module from the app.module, that module won't
be loaded in our application.

so on the app module we will see that we are now declaring a dependency, which now is the product, so now the app.module
depends on it, and it will be loaded at the moment the application has started through the main.ts file

it's on main.ts that the NestFactory, is going to create the AppModule that is the first module to be loaded in the app.

Now returning to the app module, will see that it has a @Module({}) above the class name, this is a ts decorator, he uses
it so from this decorator, he will be able to apply functionalities inside our app or specifically in this class.

## 2nd Question - What is a controller?

Let's say we have a product controller inside the product module, that controller before the name of the class has a
@Controller('controllerName') decorator.

The controller is normally on the adapters layer, they are between the aplication and the business logic, controlling the
flow to call the use cases.

So let's use a very simple example for understand, but it's still very useful because when we are inside an product envi
ronment, that we make the deploy and we have a "load balancer" that will distribute the network traffic or user requests
across multiple servers to ensure that no single server is overwhelmed, sometimes we have a service that go on the backend
just to check if the server is active, and know if it can send requests to that node.



two flags that are going to be used

--flat: when we want to create the file in the same folder as the module, not nested
--no-spec: when we don't want a test file for the file we are creating

the command would be `nest g co product --flat --no-spec`

this will cause the product controller to be created inside the folder we're in and assign that controller to the module.

