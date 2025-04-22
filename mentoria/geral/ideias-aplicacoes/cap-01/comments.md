## Documentation is important but we should not look it as a limiting factor

For example, the instructor had a case where he needed to create an accountability system where the insurance plans and
other bills needed to have a regulation, because these services need to follow certain rules.

The system was responsible to receive these balances and inside of it a file with all the accounts with their respective
rules.

He started by doing the code of the whole application, and because the messages for the client had to be very specific.

The company where he worked on, the idea of requirements gathering, and the use cases documents were very formal, and the
developers were facing difficulties of doing the "reverse engineering" the code into documentation, and the client
suggested that he would make the messages worse because the team was not being able to map all the system messages.

So in short, every time we go to the project documentation, the details level should not be even close to the coding level,
the coding is in fact "where the truth is encoded", so there was this poor suggestion of worsening the application so it
adjusts to the documentation.

With this we end in the conclusion that we indeed use the docs to clarify some business rules, or defining an interface
that make sense to us, for our understanding of the flows, but they go only to a certain point, we end up reaching some
point that it does not make so much sense for us to "tie" so much to the docs, because there is some gap of what is going
to be implemented and what is going to be documented, sometimes documenting, because it's on a high level, which increases
the chances of making mistakes.

## Problem vs Solution

### Problem

Inside the problem, we have a great "domain", which consists of, for example, every company has an area of activity, meaning
that it have different flows and data that it manipulates, and that is part of the domain, what the company solves in the
real world. The social security, for example, is the "granting of social security benefits" (retirement benefits, disability
benefits, social benefits, etc), which is a series of benefits that the social security makes available for the clients.

We then end up dividing them into specific parts, for example, there is a specific part for when the client suffers an
accident in the job. They need to through a medical expertise, that will then make the anamnesis to define if the user
has the right for a benefit.

### Solution Pt 1.

We can now understand that inside a big problem, we have specific sub domains, and when we work in a big application, the
first thing we need to focus is not in the solution, in the first moment we do not need to know if we are going to use
react, vue.js, angular, etc, to solve it.

There is no problem for us to think about which framework we'll use, where we will host it, etc. However, more important
than this, is focusing on understanding the problem.

### Solution Pt 2.

When we think that each of the subdomains, such as requirements, expertise, rights, and so on, let's say we as developers
answer to the experts, which is the people that together with the technical team (that like project patterns, but does not
like to talk with clients), and together with the devs and these experts, we'll create the "ubiquitous language", that is
basically an universal language, which does not work on the whole project, but will be useful for one specific part of the
project that the developers use and the business analysts utilize to talk with each other.

In the end, we'll create a limited context to work with all the minor projects

### Solution Pt 3.

SO we end up having two strategies, one is the "ubiquitous language" and the other one is the "Bounded Context", which
inside of it, there is a ubiquitous language that have its terms, its phrases, its verbs, and so on.

We might think that we need to create a doc, and a glossary to it, we can do it, but in the day to day of the project
it will arise in a natural way, and after the interaction of the user with the clients, specialists, developers, and so on.
