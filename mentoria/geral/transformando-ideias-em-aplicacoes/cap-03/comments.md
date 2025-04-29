Inspecting Code

In this chapter, we're talking about a project that has been made

1. In this project, the mobile version hadn't been developed yet. He explained that by following the rules, and adapting
   the code to the existent back-end —and vice versa — it was very easy to implement and ensure the code worked across
   all layers.

2. When we design our application in a way that "protects" it from mixing frameworks with the business rules, we eventually
   end up having a gigantic advantage.

3. The front-end was rebuilt for mobile using almost the same structure, since React and React Native are similar. However,
   the components, token storage, and state management differ. For example, if we close and reopen the app, it detects that
   the user is still logged in and shows logged-in state, meaning a session has been maintained

4. Even in less complex projects. it's important to build good habits by understanding how good architecture works in practice.
   Applying those principles in projects will eventually pay off.

5. Within a project, it's a good idea to use a language or framework that is similar to the one already ins use, such as,
   For instance, if we build the front-end with React, using React Native for mobile, can allow us to reuse parts of the
   web components. However, some kinds of reuse can eventually harm the project by making things more complicated instead
   of easier.

6. In some cases, the code is tightly coupled, so any change affects multiple parts of the system. That's why we chose a
   decoupled approach, which is ideal for implementing business rules. For example, if we build the back-end in `Java`,
   we can't directly reuse Java-based business rules in the front-end. This forces us to replicate logic, specially if
   it's something that should run on the client side and isn't feasible to handle with a different language.

7. Continuing with the previous example, suppose we use `flutter` instead of `react native` for the mobile app. In that
   case, we'd likely need to implement many things differently or move most of the functionality to the back end. Although
   much of it may already be there, Flutter would act more like a shell to run to run the logic. However, we wouldn't reach
   the same level of productivity as we would using a more similar tool.
