# Nest Concepts

## Commands

In the nest cli, we can run many commands that help us to deal with our app, such as nest generate module, nest generate
component and so on. and here i'll list one of the important commands and flags that are being used in the development of
the project.


flags: 

--flat: By using this flag, with a nest generate controller name --flat, we are saying that we want to generate the
controller directly inside the module folder, and not creating a subdirectory

--no-spec: Don't create the spec file to this controller

## Modules

When we generate a module via the cli, it will create a folder for the module that has just been generated and the module
folder will have many resources that are encapsulated or hidden in this module.
The idea of creating a modularized app is exatcly for us to have a more difficulty to estabilish many dependecies in these
files. One thing that measures the quality level of an application is the level of coupling, the more coupled an application
elements are, the harder it will be to maintain the application.

One good example for us to understand this, is using as an example, a 5km race where me and 9 other friends are going to
participate in it, and we have two strategies for it, or each person run independently or everyone runs with their hands
in hands. Which strategy we think that will work out the best? If we choose the second option, the coupling level will be
high and everyone will be much slower than running independently. Of course that in one application we can't make every
file to be independent of one another, because we need to have the relations between those files, but we need to understand
that the bigger is the coupling, more levels of relationship between our modules, harder it will be to maintain.

So the idea of modularization. is that inside of each module, we create a series of resources that will be visible only to
that module unless we explictly declare that this resource will be visible outside the module.

## Controllers

In the example above we've just created the eventos module, changed to its folder, and executed the command to generate a
controller with the --flat flag, which means that it won't create another folder, but place this controller inside the
folder where we are.

And now that we have our controller, its through the controller that we are going to map our end points inside of it, the
urls of our api to then, we start integrating it with our frontend. 

## API End Points

and endpoint is created as, every method can be used to here,

on methods that require body arguments, 

@MethodName()
async functionName() {
  // Code for the method
}

The first endpoint we created is for the eventos controller, a @Get(), an empty parameter means that we don't have a specific
name for that, so it will be reached with the url/eventos, then, we are simply returning the eventos we have on our constants
inside core folder

## Endpoints with decorators

Now we'll create an api end point, that fetches an 'evento' based on its id or alias, so in this case we will create a function
but in this case, we are passing as a parameter the 'idOuAlias' and mark this method as @Get(':idOuAlias') and on the parameter
we pass a @Param('sameNameAsTheGetParameter'), and after that decorator, we are saying that the url will have a parameter,
based on the : in the @Get(':idOuAlias') that will be modified according to our url, and then, pass that as a parameter to
our method. and we'll call the method with the get params e.g.

GET http://localhost:4000/eventos/evento-fullstack

## POST Endpoint

For the post endpoint, we'll need to receive and pass the parameters in the body, the first change is on the end point, it
should be something like this

  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    ...
  }

  in this case we don't pass any dynamic value to the @Post decorator, and on the function parameters, and the data we
  are receiving in the body, we are naming it based on the @Body()
  and on the post method, we'll do it like: 

  Beneath the POST endpoint, we'll set the endpoint as application/json, then, we'll pass the required data to it, e.g

  POST http://localhost:4000/eventos/acessar
  Content-Type: application/json

  {
    "id": "0da054a5-91ef-4ad6-ae2f-bd30ba0f5f0d",
    "senha": "senha123"
  }









