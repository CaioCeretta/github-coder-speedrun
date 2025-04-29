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

## Commenting the EAD Project Code

Every code has the strategic part, it consist of three specific tools that help us organizing our code.

1 - Bounded Context: Basically is the "divide-and-conquer" rule, when we have a big business and even if it's an "distance
learning" platform, which is still in the beginning when compared to bigger applications, we still can notice bounded contexts,
within the application that can consist of different parts which can be developed independently. Let's use a forum as an
example, it may still be simple, but it could have moderators; different ways to organize it; IA Integration to respond
automatically. Therefore, the quantity of use cases can grow in the app, and the module become really big. So when we look
at companies, we have in the bounded contexts, two big parts, which are the company domain (the business that the company
works on) and everything the company does, all it flows, the reason for the company to exist is divided in many sub-domains,
that represent how the company is divided, and they can represent one bounded context.

Consequently, if we look within an app, we might find inside this application three bounded contexts: one representing
the authentication, the educational domain — course registration, class management, user progresses, etc. — and one for the
forum. let's say that within the distance learning platform, we also want to create a blog — that would be another
bounded context.

If we try to place everything together in a single context, there's a high chance things will get messy. We may end up
with classes that take on responsibilities from different modules, causing the codebase to grow uncontrollably and
become harder to maintain.

That's why even in smaller applications, breaking it in three bounded contexts is a good option.

There's also a folder "common" but is not a bounded context, it's simply a package that have common things that is useful
for every module of the application.

We can observe that within the authentication context, we have a class called "User", and within forum context, there's a
class named "Author". Although in the database the Author has a foreign key relationship with the User table, this link
is not strictly necessary in the code. That's because an Author could also be an independent entity, with a name that's
not tied to the rest of the platform.

This brings us to we used: bounded contexts. We can see that this concept is reflected in the code structure through the
use of folders—or more specifically, packages—that separate the business logic of the application.As a result the folders
like auth, educational, and forum represent distinct domains of business rules. They are intentionally kept free from any
direct database interactions—there are no DB imports, no language-specific constructs, and no third party libraries, being
the only exception is an UUID library, which, instead of letting the application framework or the database to generate the
IDs, is used to ensure that the application itself has control over ID generation.
