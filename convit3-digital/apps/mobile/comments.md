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

