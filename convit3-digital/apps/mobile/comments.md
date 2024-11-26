# React Native Comments


## Init
First things first, when we create an expo project, it will start with a few hooks and components, and also a script to
reset the project. So the first thing we'll do is to run this script with node, and if there is any folder named hooks,
constants, etc. We will delete it and only keep the app folder and the assets folder, so it will be as clean as possible.

Then we'll create a .env file for our environment variables where we'll add a EXPO_PUBLIC_API_URL and pass the default
ip, wich was defined as a pattern by android for us to be able to access the local machine http://10.0.2.2:4000, 

We also need to add on the .env this code

When we use this key inside the .env, it says that it will use the configuration of a monorepo, so it will look for the
dependencies, inside the project, aswell as in the node modules of the repository as a whole.

EXPO_USE_METRO_WORKSPACE_ROOT=1 npx expo start

this code is saying that our project will be inside a workspace, to expo understand that we are using a workspace inside
our project.

## Styling

For the styling we are taking an approach quite similar to tailwind, we are creating a styles folder inside the root
folder, and inside, we created a utility and an index.ts, inside the utility.ts we created a constant styles and
assigned to it a StyleSHeet object from react native and called the create method
from that class. 

inside the create method, we create and export three other objects, a flex1, justifyCenter and alignCenter, which are
pointing to the properties from CSS

and now on our index, we are exporting everything from that utility file, and we can eventually create other files for the
components, many other files just for paddings, other for margins, colors and so on, and we can go by fragmenting the main
properties that we'll use inside our app, then for example, in our index.ts, that was 

style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}

it's now 

style={[
  flex1,
  justifyCenter,
  alignCenter
]}

we can do this aswell as a class that make a grouping of similar stylings like

const styles = StyleSheet.create({
  centerGrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const centerGrow = styles.centerGrow

we can also use variables we just defined like

botao: {
    backgroundColor: bgRed500.backgroundColor,
    padding: 10,
    borderRadius: 5
  }

In the code we are not separating the paddings, margins, etc... But it's also a good option to create separate styling for 
each style

## Folders

Our default layoult is to add the pages as stacks, so if we move from one page to another, that page will be placed above
the last one, but we can also create route groups, just as we did in next, so if we are working with specific navigations
we can create like (tabs), and in this folder we can have a new layout, and in this layout we can do the navigation between
tabs.

## Files

The initial folder structure, is (tabs), where we hold the index.ts and will be the first to be loaded, but on our root 
layout, it is returning a <Stack> and inside it a Stack.Screen with the name of the (tabs)/index, so it will be a stack,
but in the end of the day, he will use folder structure to define the navigations, and in tabs we will create another _layout
to define the tabs layout inside that folder

## Async Storage

Async Storage is a way to store the data of the client, even though he may not have access to the roaming data, it enables
us to save the data directly on the mobile device.

To do this, we'll add the package

➜ npx expo install @react-native-async-storage/async-storage

This package 

## Data Folder

The data folder is for managing our app data and in this folder we will have the following folders: 

### Hooks

The hooks folder is where we'll create personalized hooks, that are basically the idea of us taking the logic of our
component and separate them from the component, to reuse it.
Hooks are used to reutilize codes. And the idea is to centralize inside a function, that can store inside other functions
that stores all the access to our application backend, and we'll start by creating a hook named useApi.ts
Here we will have two hooks, that are separated from the components, and have as main focus, to be utilized by the components
so that we can have both the local storage data, and make the calls to our api

- useAPI.ts

This hook will concentrate functions to our API backend, the basic thing for this is that we create a constant with the
baseURL of our application, before every fetch, we check if there is a / in the path received, if not, we add one, and
fetch with that path with the node fetch, and return the response, filtered by a function named extrairDados that will
return the json of that response if everything went ok.

On the POST method we'll change the function to be just

const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    })

    where body is one of the parameters received on the function, and the urlCompleta receives the same thing as the GET
    above


- useLocalStorage

This hook will be used to store data from the async storage, on our code, we will call this function passing a key and a
value we want to save, and this will be persisted in the local storage, as well, as retrieved.

But the problem of returning the functions directly, is that many times, for us to manage the state of our app, we'll depend
on these functions, and if any of them is recreated, simply because the code mas executed more than once, this will trigger
an action, that may fetch something unnecessary, we may run an action to update the interface simply because this function
was created one second time, because if it runs this code more than once, it'll create the function salvar again, obterItem
e remover, everytime this code runs.

So we'll memoize these functions to run them only one time and this function will be stored internally in react, so it can
always use it when needed the exact same function and not keep on recreating it, that may lead to an unnecessary function
invocation in our interfaces. And to memoize we need to turn this into a constant and wrap these function calls into an
useCallback


### Contexts

Contexts are used to manage our states, and reutilize the states of our app through the components.

Now, after creating the hooks for the local storage, and the api calls, we will focus our attention in defining a context
class, so we can manage the data of our app, and there'll be a drawing explaining better that idea of managing data, sharing
them among the components, and why this is important and how we'll do in our app.

So the idea of working with contexts is basically separating the state management from the component, and take out of the
component the fact that "he is the owner of that state", because more than one component, can get and update the same state.
There is no problem in a component to have a state, as longs as this state is focused to be used inside that component, or
it will at most be transfered to his child components.

But when we start having the necessity of using those data in different components and "distant" in the components tree,
we can visualize a meaning to store it in a context and this context be disponibilized to everyone.

Every context has a provider, that is what will wrap our whole component trees and will provide exactly this context.

On the context, we are defining an interface as a generic to it, e.g.

interface ContextoEventosProps {
  numero: number
  texto: string
}

export const ContextoEventos = createContext<ContextoEventosProps>({} as ContextoEventosProps)

then we will use it with a useContexto(ContextoEventos), many times we'll do it like this, but there is another option to
it, that is creating a customHook that will change that useContext() to a simple useEventos

in that file we would simply use this useContext, but everywhere we need that context, we'll simply use useEventos()

## Dependency on other packages

We must not forget that we are using as a dependency of our app, the core package, we need to also it as a dependecy in
the package.json






  
