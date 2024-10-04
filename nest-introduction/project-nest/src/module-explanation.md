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

Now on the generated controller is a simple class, with the @Controller() decorated and inside the parenthesis, the name
nest will use to understand the controller

then we'll write a ping function, that will simply return a string pong, on controller functions, we need to decoratorate
them, and this decoration is a @ http verb, such as @GET() @POST() and so on, to reach this function and inside of it, we'll
insert the name we are going to use to call this function. 

When we run the development server, it will show us that the product controller has been mapped, as well as the products/ping

Now for us to call, this function we are going to use this mapped url. A http file will be created called products.http
where we will write the routes we create on the controller based on the products, now we'll send the request to the
url just mapped and the server, that runs inside nestjs will create a framework structure, like the express, and return
us the response.

in those http files, if we were to add more than one request, basically we just need to write 3 hashes to separate the
commands.

Another thing we can add to the modules is a module.entity, but one caveat we have that is worth talking about, is that
it's very important to separate what we are going to use inside the framework, to what we are going to put outside of
any framework that we'll use. But as good as a framework may be, in the moment we start to mix the code, start to put
our framework completely "entangled" with the framework, it is very possible that we'll eventually have difficulties to
have "mobility" in our application, because instead of thinking about the business structure, instead of programming in
a way more oriented to what the business needs, we end up making concessions and adequating ourselves to the framework
necessities, what may lead to very troublesome things. So we always need to take care when start bringing our model into
the framework.

So back to the entity, in entitoes files, we determine the schema of that entity with an interface. But even though we are
creating an interface  for our model, it's better to create classes, and normally bringing a concept of rich modelling, be-
cause as close our business logics are of our data, better for our app. SO we'll go from what is more important to the more
external parts that are the applications.

But in this case, we are not looking to bring a clean architecture more in depth, because in this lesson, the instructor
does not want to bring, unnecessary concepts and focus more on the nestjs.

So we created the product folder, with the module, controller, http and entity and now we'll create a constants folder
inside the src, and utilize a list of products.

Now, through our controller, we are going to return this data, very similar to what we are used on a rest API.

We would normally think the we would declare this method with like

@Get()
  async fetchProducts(): Promise<Product[]> {
    return products;
  }

by passing an empty get, if we just pass the Get as empty, nest will understand that is supposed to get all products when
the route domain/products is called

now let's say we are going to use a get which needs to receive a parameter, and the parameter is dynamic, and even though in
our entity the id is a number, it will always come to us as a string, so in the parameter we need to inform that it is a string
and before the parameter of the function, we need to annotate this parameter as @Param('id'), to inform that this id is
the same one as the route is receiving.

  @Get(':id')
  async fetchProductById(@Param('id') id: string): Promise<Product> {}


the parameter is used to map the route parameters, so if we were using something like @Get('identification), we would, after
the / the first value we would receive is the identification, and we can use @Param('identification) id: string and use
it as we would

then we would simply do something as

GET http://localhost:4000/products/1

Now we'll go for the creation, we may think that this is not possible because we don't have a db, but we have a list on the
memory, which is products, and while it doesn't make a redeploy or refresh the application, it will add this value to the
memory and we'll be able to fetch these values as well as the new registered ones.

But we are not adding our entire rules inside the controller, the controller is more something that will take the values
and dispatch them to other elements.

the format is like this

  @Post()
  async create(@Body() product: Product): Promise<void> {
    products.push({
      ...product,
      id: product.id ? product.id : products.length + 1,
    });
  }

  and call it like

    @Post()
  async create(@Body() product: Product): Promise<void> {
    products.push({
      ...product,
      id: product.id ? product.id : products.length + 1,
    });
  }



this means tha the product is comming from the body of the request and as they are typed as Product, which is my entity,
they sall have the same properties as the interface, if it is ok, nest will make this mapping of the body for this class
and we'll receive the product ready for us to do something with it and save it in our memory.

the patch is pretty similar to the post, patch is for updating a piece of the resource
like

@Patch()
  async update(@Body() product: Partial<Product>): Promise<void> {
    const index = products.findIndex((p) => p.id === +product.id);
    console.log(index);
    products[index] = { ...products[index], ...product };
   }

   and call it like

  @Patch()
  async update(@Body() product: Partial<Product>): Promise<void> {
    const index = products.findIndex((p) => p.id === +product.id);
    console.log(index);
    products[index] = { ...products[index], ...product };
  }




  where we will partially pass the product entity, check if the id is the same as one saved, and update it

